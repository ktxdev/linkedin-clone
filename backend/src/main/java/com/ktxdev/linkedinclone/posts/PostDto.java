package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.users.UserDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PostDto {
    private UUID id;
    private String text;
    private String imageUrl;
    private LocalDateTime postedAt;
    private UserDto postedBy;
}
