package com.codestates.seb41_main_034.common.exception.response;

import lombok.Getter;
import org.springframework.validation.BindingResult;

import javax.validation.ConstraintViolation;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Getter
public class ValidationError {

    private final String descriptor;
    private final Object rejectedValue;
    private final String reason;

    private ValidationError(String descriptor, Object rejectedValue, String reason) {
        this.descriptor = descriptor;
        this.rejectedValue = rejectedValue;
        this.reason = reason;
    }

    public static List<ValidationError> of(BindingResult bindingResult) {
        final List<org.springframework.validation.FieldError> fieldErrors =
                bindingResult.getFieldErrors();
        return fieldErrors.stream()
                .map(error -> new ValidationError(
                        error.getField(),
                        error.getRejectedValue() == null ?
                                "" : error.getRejectedValue().toString(),
                        error.getDefaultMessage()))
                .collect(Collectors.toList());
    }

    public static List<ValidationError> of(Set<ConstraintViolation<?>> constraintViolations) {
        return constraintViolations.stream()
                .map(constraintViolation -> new ValidationError(
                        constraintViolation.getPropertyPath().toString(),
                        constraintViolation.getInvalidValue().toString(),
                        constraintViolation.getMessage()
                )).collect(Collectors.toList());
    }

}
