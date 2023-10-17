package com.ktxdev.linkedinclone.exceptions;

import java.time.LocalDateTime;

public record ErrorResponse(String message, int status, LocalDateTime timestamp) {
}
