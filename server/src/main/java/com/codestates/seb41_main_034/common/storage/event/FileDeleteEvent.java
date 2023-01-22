package com.codestates.seb41_main_034.common.storage.event;

import lombok.Getter;
import org.springframework.context.ApplicationEvent;

import java.util.List;

public class FileDeleteEvent extends ApplicationEvent {

    @Getter
    private final List<String> files;

    public FileDeleteEvent(Object source, List<String> files) {
        super(source);
        this.files = files;
    }

}
