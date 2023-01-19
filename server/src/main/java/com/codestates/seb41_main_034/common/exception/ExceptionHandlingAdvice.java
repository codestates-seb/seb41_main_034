package com.codestates.seb41_main_034.common.exception;

import com.codestates.seb41_main_034.common.exception.response.ErrorInfo;
import com.codestates.seb41_main_034.common.response.Response;
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
import org.springframework.web.multipart.MaxUploadSizeExceededException;

import javax.validation.ConstraintViolationException;
import java.util.Optional;

@Slf4j
@RestControllerAdvice
public class ExceptionHandlingAdvice {

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
        log.error("컨트롤러 메서드 인자가 올바르지 않습니다.", e);

        return Response.error(ErrorInfo.of(e.getBindingResult()));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleMethod(MethodArgumentTypeMismatchException e) {
        log.error("컨트롤러 메서드 인자의 타입이 맞지 않습니다.", e);

        return Response.error(new ErrorInfo(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleConstraintViolationException(ConstraintViolationException e) {
        log.error("검증 대상 객체가 제약을 위반했습니다.", e);

        return Response.error(ErrorInfo.of(e.getConstraintViolations()));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.METHOD_NOT_ALLOWED)
    public Response<?> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
        log.error("지원하지 않는 HTTP 메서드입니다.", e);

        return Response.error(ErrorInfo.of(HttpStatus.METHOD_NOT_ALLOWED));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleHttpMessageNotReadableException(HttpMessageNotReadableException e) {
        String logMessage = "HTTP 요청을 읽을 수 없습니다.";

        log.error(logMessage, e);

        String responseMessage = Optional.ofNullable(e.getMessage())
                .map(s -> s.split(";")[0])
                .orElse(logMessage);

        return Response.error(new ErrorInfo(HttpStatus.BAD_REQUEST.value(), responseMessage));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleMissingServletRequestParameterException(MissingServletRequestParameterException e) {
        log.error("요청에 필요한 파라미터가 없습니다", e);

        return Response.error(new ErrorInfo(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Response<?> handleMaxUploadSizeExceededException(MaxUploadSizeExceededException e) {
        log.error("요청의 파일 크기가 제한을 넘었습니다.", e);

        return Response.error(new ErrorInfo(HttpStatus.BAD_REQUEST.value(), e.getMessage()));
    }

    @ExceptionHandler
    public ResponseEntity<?> handleBusinessLogicException(BusinessLogicException e) {
        log.error("비즈니스 로직에서 예외가 발생했습니다", e);

        ExceptionCode exceptionCode = e.getExceptionCode();

        return new ResponseEntity<>(Response.error(ErrorInfo.of(exceptionCode)), exceptionCode.getHttpStatus());
    }

    @ExceptionHandler
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Response<?> handleException(Exception e) {
        log.error("예외가 발생했습니다.", e);

        String message = e.getMessage() == null ? HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase() : e.getMessage();

        return Response.error(new ErrorInfo(HttpStatus.INTERNAL_SERVER_ERROR.value(), message));
    }

}
