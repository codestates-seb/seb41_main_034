package com.codestates.seb41_main_034.auth.utils;
import com.codestates.seb41_main_034.common.exception.response.ErrorInfo;
import com.codestates.seb41_main_034.common.response.Response;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ErrorResponder {
    public static void sendErrorResponse(
            HttpServletResponse response, HttpStatus status, ObjectMapper mapper) throws IOException {
        Response<?> errorResponse = Response.error(ErrorInfo.of(status));
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.setStatus(status.value());
        response.getWriter().write(mapper.writerFor(Response.class).writeValueAsString(errorResponse));
    }
}