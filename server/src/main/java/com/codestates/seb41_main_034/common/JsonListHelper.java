package com.codestates.seb41_main_034.common;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@AllArgsConstructor
@Component
public class JsonListHelper {

    private final ObjectMapper mapper;

    public List<String> jsonToList(String json) {
        try {
            return mapper.readerForListOf(String.class).readValue(json);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.JSON_CANNOT_READ_IMAGE_URLS);
        }
    }

    public String listToJson(List<String> list) {
        try {
            return mapper.writerFor(new TypeReference<List<String>>() {}).writeValueAsString(list);
        } catch (JsonProcessingException e) {
            throw new BusinessLogicException(ExceptionCode.JSON_CANNOT_WRITE_IMAGE_URLS);
        }
    }

}
