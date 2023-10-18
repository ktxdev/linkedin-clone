package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.users.UserMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.NullValueCheckStrategy;

import static org.mapstruct.MappingConstants.ComponentModel.SPRING;

@Mapper(componentModel = SPRING, uses = UserMapper.class)
public interface PostMapper {
    @Mapping(target = "postedAt", expression = "java(java.time.LocalDateTime.now())")
    Post fromRequest(PostCreateRequest postCreateRequest);
    PostDto toDto(Post post);
}
