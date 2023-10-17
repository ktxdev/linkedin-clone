package com.ktxdev.linkedinclone.users;

import com.ktxdev.linkedinclone.auth.SignUpRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User fromRequest(SignUpRequest signUpRequest);
    UserDto toDto(User user);
}
