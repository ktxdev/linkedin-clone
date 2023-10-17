package com.ktxdev.linkedinclone.exceptions;

import io.jsonwebtoken.JwtException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;

@RestControllerAdvice
public class RestExceptionHandler extends ResponseEntityExceptionHandler {
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(BadRequestException.class)
    public ErrorResponse handleBadRequestException(BadRequestException ex) {
        return new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value(), LocalDateTime.now());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleSecurityException(Exception ex) {
        ErrorResponse response;

        if (ex instanceof BadCredentialsException) {
            response = new ErrorResponse("Invalid Username and/or Password", HttpStatus.UNAUTHORIZED.value(), LocalDateTime.now());
        } else if (ex instanceof JwtException) {
            response = new ErrorResponse("Invalid access token", HttpStatus.FORBIDDEN.value(), LocalDateTime.now());
        } else {
            response = new ErrorResponse(
                    "Oops! Something went wrong",
                    HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    LocalDateTime.now());
        }

        return ResponseEntity.status(response.status()).body(response);

    }
}
