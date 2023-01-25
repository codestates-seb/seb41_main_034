package com.codestates.seb41_main_034.common.storage.event;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

public class FileCopyEvent extends ApplicationEvent {

    @Getter
    private final Map<String, MultipartFile> fileMap;

    public FileCopyEvent(Object source, Map<String, MultipartFile> fileMap) {
        super(source);
        this.fileMap = fileMap;
    }

}
