package com.codestates.seb41_main_034.common.response;

import com.codestates.seb41_main_034.common.exception.response.ErrorInfo;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@JsonInclude(Include.NON_NULL)
public class Response<T> {

    private final T data;

    private final ErrorInfo error;

    public static <T> Response<T> of(T data) {
        return new Response<>(data, null);
    }

    public static <T> Response<T> error(ErrorInfo error) {
        return new Response<>(null, error);
    }

}
