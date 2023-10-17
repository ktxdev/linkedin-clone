package com.ktxdev.linkedinclone.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record SignUpRequest(@NotBlank(message = "First name is required") String firstName,
                            @NotBlank(message = "Last name is required") String lastName,
                            @Email(message = "Please provide a valid email")
                            @NotBlank(message = "Email is required") String email,
                            @NotBlank(message = "Password is required")
                            @Min(value = 8, message = "Password should be at least 8 characters long")
                            String password,
                            String passwordConfirm) {
}
