package com.ktxdev.linkedinclone.users;

import jakarta.persistence.Column;

import java.util.UUID;

public record UserDto(UUID id,
                      String firstName,
                      String lastName,
                      String email,
                      String profileImageUrl) {
}
