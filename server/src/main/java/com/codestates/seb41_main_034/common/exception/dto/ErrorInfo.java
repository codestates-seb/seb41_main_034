package com.codestates.seb41_main_034.common.exception.dto;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;

@Getter
@RequiredArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ErrorInfo {

    private final int status;

    private final String message;

    private List<ValidationError> validationErrors;

    private ErrorInfo(final List<ValidationError> validationErrors) {
        this.status = HttpStatus.BAD_REQUEST.value();
        this.message = HttpStatus.BAD_REQUEST.getReasonPhrase();
        this.validationErrors = validationErrors;
    }

    public static ErrorInfo of(BindingResult bindingResult) {
        return new ErrorInfo(ValidationError.of(bindingResult));
    }

    public static ErrorInfo of(Set<ConstraintViolation<?>> violations) {
        return new ErrorInfo(ValidationError.of(violations));
    }

    public static ErrorInfo of(ExceptionCode exceptionCode) {
        return new ErrorInfo(exceptionCode.getHttpStatus().value(), exceptionCode.getMessage());
    }

    public static ErrorInfo of(HttpStatus httpStatus) {
        return new ErrorInfo(httpStatus.value(), httpStatus.getReasonPhrase());
    }

}
