package com.codestates.seb41_main_034.common.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@AllArgsConstructor
public class PaginatedData<T> {

    private List<T> content;

    private int page;

    private int size;

    private int totalPages;

    private long totalElements;

    public static <T> PaginatedData<T> of(Page<T> page) {
        return new PaginatedData<>(
                page.getContent(), page.getNumber(), page.getSize(), page.getTotalPages(), page.getTotalElements());
    }

}
