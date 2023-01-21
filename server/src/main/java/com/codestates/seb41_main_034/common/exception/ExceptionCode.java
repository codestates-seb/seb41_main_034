package com.codestates.seb41_main_034.common.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ExceptionCode {
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "회원을 찾을 수 없습니다."),
    PRODUCT_NOT_FOUND(HttpStatus.NOT_FOUND, "상품을 찾을 수 없습니다."),
    PRODUCT_CANNOT_READ_IMAGE_URLS(HttpStatus.INTERNAL_SERVER_ERROR, "상품 이미지 주소를 읽을 수 없습니다."),
    PRODUCT_CANNOT_WRITE_IMAGE_URLS(HttpStatus.INTERNAL_SERVER_ERROR, "상품 이미지 주소를 쓸 수 없습니다."),
    PRODUCT_NOT_ENOUGH_STOCK(HttpStatus.FORBIDDEN, "재고가 부족합니다."),
    IMAGE_BAD_DELETE_ARRAY(HttpStatus.BAD_REQUEST, "이미지 삭제 배열이 올바르지 않습니다."),
    IMAGE_NOT_SUPPORTED(HttpStatus.BAD_REQUEST, "지원되지 않는 이미지 형식입니다."),
    IMAGE_CANNOT_READ_FILE(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 파일을 읽을 수 없습니다."),
    IMAGE_CANNOT_WRITE_FILE(HttpStatus.INTERNAL_SERVER_ERROR, "이미지 파일을 저장할 수 없습니다."),
    ORDER_PRODUCT_IS_UNAVAILABLE(HttpStatus.FORBIDDEN, "구매할 수 없는 상품입니다."),
    ORDER_NOT_FOUND(HttpStatus.NOT_FOUND, "주문을 찾을 수 없습니다."),
    ORDER_MISMATCHED_PRICE(HttpStatus.BAD_REQUEST, "상품 주문 가격이 상품 가격과 맞지 않습니다."),
    ORDER_CANNOT_UPDATE_ADDRESS(HttpStatus.BAD_REQUEST, "주문 배송지를 변경할 수 없습니다."),
    ORDER_CANNOT_CANCEL(HttpStatus.BAD_REQUEST, "주문을 취소할 수 없습니다."),
    ORDER_NO_PRODUCTS_TO_PAY(HttpStatus.BAD_REQUEST, "결제할 상품이 없습니다."),
    ORDER_NO_PRODUCTS_TO_PREPARE(HttpStatus.BAD_REQUEST, "배송을 준비할 상품이 없습니다."),
    ORDER_NO_PRODUCTS_TO_SHIP(HttpStatus.BAD_REQUEST, "배송 시작할 상품이 없습니다."),
    ORDER_NO_PRODUCTS_TO_CONFIRM_CANCELLATION(HttpStatus.BAD_REQUEST, "취소 완료할 상품이 없습니다."),
    QUESTION_NOT_FOUND(HttpStatus.NOT_FOUND, "문의를 찾을 수 없습니다."),
    QUESTION_CANNOT_UPDATE(HttpStatus.FORBIDDEN, "이미 답변된 문의는 수정할 수 없습니다."),
    QUESTION_CANNOT_DELETE(HttpStatus.FORBIDDEN, "이미 답변된 문의는 삭제할 수 없습니다."),
    QUESTION_CANNOT_ANSWER(HttpStatus.FORBIDDEN, "이미 답변된 문의에는 답변할 수 없습니다."),
    QUESTION_ANSWER_NOT_FOUND(HttpStatus.NOT_FOUND, "답변을 찾을 수 없습니다."),
    USER_ADDRESS_NOT_FOUND(HttpStatus.NOT_FOUND, "주소를 찾을 수 없습니다."),
    REVIEW_NOT_FOUND(HttpStatus.NOT_FOUND, "후기를 찾을 수 없습니다."),
    REVIEW_CANNOT_WRITE_IMAGE_URLS(HttpStatus.INTERNAL_SERVER_ERROR, "후기 이미지 주소를 쓸 수 없습니다.");

    private final HttpStatus httpStatus;

    private final String message;

}
