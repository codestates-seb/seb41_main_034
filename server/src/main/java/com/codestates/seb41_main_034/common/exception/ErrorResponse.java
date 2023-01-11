package com.codestates.seb41_main_034.common.exception;

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
public class ErrorResponse {

    private final int status;

    private final String message;

    private List<ValidationError> validationErrors;

    private ErrorResponse(final List<ValidationError> validationErrors) {
        this.status = HttpStatus.BAD_REQUEST.value();
        this.message = HttpStatus.BAD_REQUEST.getReasonPhrase();
        this.validationErrors = validationErrors;
    }

    public static ErrorResponse of(BindingResult bindingResult) {
        return new ErrorResponse(ValidationError.of(bindingResult));
    }

    public static ErrorResponse of(Set<ConstraintViolation<?>> violations) {
        return new ErrorResponse(ValidationError.of(violations));
    }

    public static ErrorResponse of(ExceptionCode exceptionCode) {
        return new ErrorResponse(exceptionCode.getHttpStatus().value(), exceptionCode.getMessage());
    }

    public static ErrorResponse of(HttpStatus httpStatus) {
        return new ErrorResponse(httpStatus.value(), httpStatus.getReasonPhrase());
    }

}
