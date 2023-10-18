package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.users.User;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class PostCreateRequest {
    private String text;
    private MultipartFile image;
    private User postedBy;
}
