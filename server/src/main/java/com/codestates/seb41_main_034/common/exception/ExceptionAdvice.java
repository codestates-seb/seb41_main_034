package com.codestates.seb41_main_034.common.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import javax.validation.ConstraintViolationException;

import static com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;

@Slf4j
@RestControllerAdvice
public class ExceptionAdvice {
    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("컨트롤러 메서드 인자가 올바르지 않습니다.", e);

        return ErrorResponse.of(e.getBindingResult());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMethod(MethodArgumentTypeMismatchException e) {
        log.error("컨트롤러 메서드 인자의 타입이 맞지 않습니다.", e);

        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleConstraintViolationException(ConstraintViolationException e) {
        log.error("검증 대상 객체가 제약을 위반했습니다.", e);

        return ErrorResponse.of(e.getConstraintViolations());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public ErrorResponse handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
        log.error("지원하지 않는 HTTP 메서드입니다.", e);

        return ErrorResponse.of(HttpStatus.METHOD_NOT_ALLOWED);
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        log.error("요청에 필요한 body가 없습니다.", e);

        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), "Required request body is missing");
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ErrorResponse handleMissingServletRequestParameterException(MissingServletRequestParameterException e) {
        log.error("요청에 필요한 파라미터가 없습니다: " + e.getMessage(), e);

        return new ErrorResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage());
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleBusinessLogicException(BusinessLogicException e) {
        log.error("비즈니스 로직에서 예외가 발생했습니다: " + e.getMessage(), e);

        ExceptionCode exceptionCode = e.getExceptionCode();

        return new ResponseEntity<>(ErrorResponse.of(exceptionCode), exceptionCode.getHttpStatus());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ErrorResponse handleException(Exception e) {
        log.error("예외가 발생했습니다.", e);

        return new ErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage());
    }
}
