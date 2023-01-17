package com.codestates.seb41_main_034.common;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
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
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class ImageStorageService {

    @Value("${image.local-path}")
    private String localPath;

    @Value("${image.server-url}")
    private String serverUrl;

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

}
