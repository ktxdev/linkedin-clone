package com.ktxdev.linkedinclone.posts;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PostService {
    PostDto createPost(PostCreateRequest postCreateRequest, HttpServletRequest request);
    Resource getPostImage(String fileName);
    Page<PostDto> getAllPosts(Pageable pageable);
}
