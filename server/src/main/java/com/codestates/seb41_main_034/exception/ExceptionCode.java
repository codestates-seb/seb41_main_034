package com.codestates.seb41_main_034.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_EXISTS(409,"User exists"),

    USER_NOT_FOUND(404,"User not found"),

    UNAUTHORIZED_USER(403,"Not authorized user"),

    WRONG_PASSWORD(400, "Wrong password");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
