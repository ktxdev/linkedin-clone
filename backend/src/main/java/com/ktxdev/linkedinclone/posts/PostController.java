package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.users.User;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/posts")
public class PostController {
    private final PostService postService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public PostDto createPost(@AuthenticationPrincipal User user,
                              PostCreateRequest createRequest,
                              HttpServletRequest request) {
        createRequest.setPostedBy(user);
        return postService.createPost(createRequest, request);
    }

    @GetMapping(
            value = "image/{fileName:.+}",
            produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE}
    )
    public Resource getPostImage(@PathVariable String fileName) {
        return postService.getPostImage(fileName);
    }

    @GetMapping
    public Page<PostDto> getAllPosts(@PageableDefault(sort = "postedAt", direction = Sort.Direction.DESC) Pageable pageable) {
        return postService.getAllPosts(pageable);
    }
}
