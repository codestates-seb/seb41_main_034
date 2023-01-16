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
        USER_NOT_FOUND(HttpStatus.NOT_FOUND, "회원을 찾을 수 없습니다."),
        PRODUCT_NOT_FOUND(HttpStatus.NOT_FOUND, "상품을 찾을 수 없습니다."),
        PRODUCT_CANNOT_READ_IMAGE_URLS(HttpStatus.INTERNAL_SERVER_ERROR, "상품 이미지 주소를 읽을 수 없습니다."),
        PRODUCT_CANNOT_WRITE_IMAGE_URLS(HttpStatus.INTERNAL_SERVER_ERROR, "상품 이미지 주소를 쓸 수 없습니다."),
        PRODUCT_NOT_ORDERABLE(HttpStatus.FORBIDDEN, "상품을 주문할 수 없습니다."),
        PRODUCT_NOT_ENOUGH_STOCK(HttpStatus.FORBIDDEN, "재고가 부족합니다."),
        ORDER_NOT_FOUND(HttpStatus.NOT_FOUND, "주문을 찾을 수 없습니다."),
        ORDER_MISMATCHED_PRICE(HttpStatus.BAD_REQUEST, "상품 주문 가격이 상품 가격과 맞지 않습니다."),
        ORDER_CANNOT_UPDATE_ADDRESS(HttpStatus.BAD_REQUEST, "주문 배송지를 변경할 수 없습니다."),
        ORDER_CANNOT_CANCEL(HttpStatus.BAD_REQUEST, "주문을 취소할 수 없습니다."),
        ORDER_NO_PRODUCTS_TO_PREPARE(HttpStatus.BAD_REQUEST, "배송을 준비할 상품이 없습니다."),
        ORDER_NO_PRODUCTS_TO_SHIP(HttpStatus.BAD_REQUEST, "배송 시작할 상품이 없습니다."),
        ORDER_NO_PRODUCTS_TO_CONFIRM_CANCELLATION(HttpStatus.BAD_REQUEST, "취소 완료할 상품이 없습니다.");

        private final HttpStatus httpStatus;

        private final String message;

    }

}
