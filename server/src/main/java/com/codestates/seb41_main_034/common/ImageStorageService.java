package com.codestates.seb41_main_034.common;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
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

    @Value("${image.local-path}")
    private String localPath;

    @Value("${image.server-url}")
    private String serverUrl;

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

    public List<String> store(List<MultipartFile> images) {
        if (images == null) {
            return null;
        }

        // 이미지 파일이 있는 경우 이미지 서버에 저장 및 저장된 이미지 주소 List로 반환
        return images.stream().map(this::store).filter(Objects::nonNull).collect(Collectors.toList());
    }

    public List<String> update(List<String> imageUrlList, List<Boolean> deleteImage, List<MultipartFile> images) {
        // 변화가 없는 경우 null 반환
        if (deleteImage == null && images == null) {
            return null;
        }

        List<String> newImageUrlList;
        if (deleteImage != null) {
            newImageUrlList = new ArrayList<>();
            if (deleteImage.size() != imageUrlList.size()) {
                throw new BusinessLogicException(ExceptionCode.IMAGE_BAD_DELETE_ARRAY);
            }
            for (int i = 0; i < deleteImage.size(); i++) {
                if (!deleteImage.get(i)) {
                    newImageUrlList.add(imageUrlList.get(i));
                }
            }
        } else {
            newImageUrlList = new ArrayList<>(imageUrlList);
        }

        if (images != null) {
            newImageUrlList.addAll(
                    images.stream().map(this::store).filter(Objects::nonNull).collect(Collectors.toList()));
        }

        return newImageUrlList;
    }

}
