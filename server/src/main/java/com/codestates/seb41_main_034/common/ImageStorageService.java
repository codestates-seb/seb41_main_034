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
        // 파일이 null이거나 비어있는 경우 null 반환
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
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_READ);
        }

        // 파일이 저장될 경로
        Path destination = Path.of(localPath, filename).toAbsolutePath();

        // 파일 저장
        try (InputStream inputStream = multipartFile.getInputStream()) {
            Files.copy(inputStream, destination, StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_WRITE);
        }

        // 파일의 서버 주소 반환
        return serverUrl + filename;
    }

    public String saveImages(List<MultipartFile> images) {
        // 이미지 파일이 있는 경우 이미지 서버에 저장 및 이미지 주소 배열 String 반환
        List<String> imageUrls = images.stream()
                .map(this::store).filter(Objects::nonNull).collect(Collectors.toList());
        if (!imageUrls.isEmpty()) {
            try {
                return mapper.writeValueAsString(imageUrls);
            } catch (JsonProcessingException e) {
                throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_WRITE_URLS);
            }
        }

        // 이미지 파일이 없는 경우 null 반환
        return null;
    }
}
