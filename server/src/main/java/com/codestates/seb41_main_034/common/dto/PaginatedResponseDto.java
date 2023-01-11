package com.codestates.seb41_main_034.common.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@AllArgsConstructor
public class PaginatedResponseDto<T> {

    private List<T> data;

    private int page;

    private int size;

    private int totalPages;

    private long totalElements;

    public static <T> PaginatedResponseDto<T> of(Page<T> page) {
        return new PaginatedResponseDto<>(
                page.getContent(),
                page.getNumber(),
                page.getSize(),
                page.getTotalPages(),
                page.getTotalElements());
    }

}
