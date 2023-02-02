package com.codestates.seb41_main_034.common.storage;

import com.codestates.seb41_main_034.common.storage.event.FileCopyEvent;
import com.codestates.seb41_main_034.common.storage.event.FileDeleteEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.event.EventListener;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@Slf4j
@Component
public class FileEventListener {

    @Value("${image.local-path}")
    private String localPath;

    @EventListener
    @Async
    public void processFileCopyEvent(FileCopyEvent event) {
        event.getFileMap().forEach((filename, file) -> {
            try {
                Path destination = Path.of(localPath, filename).toAbsolutePath();
                Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
            } catch (IOException e) {
                log.error("파일 복사 실패", e);
            }
        });
    }

    @EventListener
    @Async
    public void processFileDeleteEvent(FileDeleteEvent event) {
        for (String filename : event.getFiles()) {
            try {
                Files.delete(Path.of(localPath, filename).toAbsolutePath());
            } catch (IOException e) {
                log.error("파일 삭제 실패", e);
            }
        }
    }

}
