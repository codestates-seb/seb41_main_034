package com.codestates.seb41_main_034.common;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ImageStorageService {

    private final String localPath;

    private final String serverUrl;

    private final ObjectMapper mapper;

    public ImageStorageService(@Value("${image.local-path}") String localPath,
                               @Value("${image.server-url}") String serverUrl,
                               ObjectMapper mapper) {
        this.localPath = localPath;
        this.serverUrl = serverUrl;
        this.mapper = mapper;
    }

    public String store(MultipartFile multipartFile) {
        if (multipartFile == null || multipartFile.isEmpty()) {
            return null;
        }

        // 사용할 파일 이름, UUID 사용
        String filename = UUID.randomUUID() + ".";

        // 파일이 이미지가 맞는지 확인, 파일 확장자 추가
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Iterator<ImageReader> readerIterator = ImageIO.getImageReaders(ImageIO.createImageInputStream(inputStream));
            filename += readerIterator.next().getFormatName().toLowerCase().replace("jpeg", "jpg");
        } catch (NoSuchElementException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_NOT_SUPPORTED);
        } catch (IOException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_READ_FILE);
        }

        // 파일이 저장될 경로
        Path destination = Path.of(localPath, filename).toAbsolutePath();

        // 파일 저장
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Files.copy(inputStream, destination, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_WRITE_FILE);
        }

        // 파일의 서버 주소 반환
        return serverUrl + filename;
    }

    public String store(List<MultipartFile> images) {
        if (images == null) {
            return null;
        }

        // 이미지 파일이 있는 경우 이미지 서버에 저장 및 저장된 이미지 주소 List로 저장
        String[] imageUrlList = images.stream()
                .map(this::store).filter(Objects::nonNull).toArray(String[]::new);

        // 저장된 이미지가 있는 경우 주소 List를 JSON 포맷 String으로 반환
        try {
            return mapper.writeValueAsString(imageUrlList);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_WRITE_URLS);
        }
    }

    public String update(String[] imageUrlArray, boolean[] deleteImage, List<MultipartFile> images) {
        List<String> newImageUrlList = new ArrayList<>();
        if (deleteImage != null) {
            if (deleteImage.length != imageUrlArray.length) {
                throw new BusinessLogicException(ExceptionCode.IMAGE_BAD_DELETE_ARRAY);
            }
            for (int i = 0; i < deleteImage.length; i++) {
                if (!deleteImage[i]) {
                    newImageUrlList.add(imageUrlArray[i]);
                }
            }
        } else {
            newImageUrlList.addAll(List.of(imageUrlArray));
        }

        if (images != null) {
            newImageUrlList.addAll(
                    images.stream().map(this::store).filter(Objects::nonNull).collect(Collectors.toList()));
        }

        try {
            return mapper.writeValueAsString(newImageUrlList);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_WRITE_URLS);
        }
    }

}
