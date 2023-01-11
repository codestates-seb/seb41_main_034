package com.codestates.seb41_main_034.common.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

public class BusinessLogicException extends RuntimeException {

    @Getter
    private final ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.message);
        this.exceptionCode = exceptionCode;
    }

    @Getter
    @AllArgsConstructor
    public enum ExceptionCode {

        ORDER_NOT_FOUND(HttpStatus.NOT_FOUND, "주문을 찾을 수 없습니다."),
        NOT_ENOUGH_STOCK(HttpStatus.FORBIDDEN, "재고가 부족합니다.");

        private final HttpStatus httpStatus;

        private final String message;

    }

}
