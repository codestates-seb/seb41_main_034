package com.codestates.seb41_main_034.common.storage;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.common.storage.event.FileCopyEvent;
import com.codestates.seb41_main_034.common.storage.event.FileDeleteEvent;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.ApplicationEventPublisherAware;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import java.io.IOException;
import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ImageStorageService implements ApplicationEventPublisherAware {

    @Value("${image.server-url}")
    private String serverUrl;

    private ApplicationEventPublisher publisher;

    @Override
    public void setApplicationEventPublisher(ApplicationEventPublisher publisher) {
        this.publisher = publisher;
    }

    public List<String> store(List<MultipartFile> images) {
        List<String> urlList = new ArrayList<>();
        Map<String, MultipartFile> fileMap = new HashMap<>();
        for (MultipartFile image : images) {
            if (image.isEmpty()) {
                continue;
            }

            // 사용할 파일 이름, UUID 사용
            String filename = UUID.randomUUID() + ".";

            // 파일이 이미지가 맞는지 확인, 파일 확장자 추가
            try (InputStream inputStream = image.getInputStream()) {
                Iterator<ImageReader> readerIterator =
                        ImageIO.getImageReaders(ImageIO.createImageInputStream(inputStream));
                filename += readerIterator.next().getFormatName().toLowerCase().replace("jpeg", "jpg");
            } catch (NoSuchElementException e) {
                throw new BusinessLogicException(ExceptionCode.IMAGE_NOT_SUPPORTED);
            } catch (IOException e) {
                throw new BusinessLogicException(ExceptionCode.IMAGE_CANNOT_READ_FILE);
            }

            // 파일 이름과 MultipartFile 저장
            fileMap.put(filename, image);

            // 파일의 서버 주소 저장
            urlList.add(serverUrl + filename);
        }

        // 파일 복사 event publish
        publisher.publishEvent(new FileCopyEvent(this, fileMap));

        // 파일 주소 반환
        return urlList;
    }

    public List<String> delete(List<String> imageUrlList, List<Boolean> deleteImage) {
        if (deleteImage.size() != imageUrlList.size()) {
            throw new BusinessLogicException(ExceptionCode.IMAGE_BAD_DELETE_ARRAY);
        }

        List<String> newImageUrlList = new ArrayList<>();
        List<String> deleteImageUrlList = new ArrayList<>();
        for (int i = 0; i < deleteImage.size(); i++) {
            if (!deleteImage.get(i)) {
                newImageUrlList.add(imageUrlList.get(i));
            } else {
                deleteImageUrlList.add(imageUrlList.get(i));
            }
        }

        List<String> deleteFilenameList = deleteImageUrlList.stream()
                .map(s -> s.replaceFirst(serverUrl, "")).collect(Collectors.toList());
        publisher.publishEvent(new FileDeleteEvent(this, deleteFilenameList));

        return newImageUrlList;
    }

    public void delete(List<String> imageUrlList) {
        List<String> filenameList = imageUrlList.stream()
                .map(s -> s.replaceFirst(serverUrl, "")).collect(Collectors.toList());
        publisher.publishEvent(new FileDeleteEvent(this, filenameList));
    }

}
