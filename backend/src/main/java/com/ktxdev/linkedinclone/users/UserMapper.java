package com.ktxdev.linkedinclone.users;

import com.ktxdev.linkedinclone.auth.SignUpRequest;
import org.mapstruct.Mapper;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING)
public interface UserMapper {
    User fromRequest(SignUpRequest signUpRequest);
    UserDto toDto(User user);
}
