package com.ktxdev.linkedinclone.posts;

import com.ktxdev.linkedinclone.exceptions.BadRequestException;
import com.ktxdev.linkedinclone.storage.StorageService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Objects;

@Slf4j
@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {
    private static final String POSTS_IMAGE_DIR = "posts";
    private final PostMapper postMapper;
    private final StorageService storageService;
    private final PostRepository postRepository;
    @Override
    public PostDto createPost(PostCreateRequest createRequest, HttpServletRequest request) {
        if ((Objects.isNull(createRequest.getImage()) || createRequest.getImage().isEmpty())
                && (Objects.isNull(createRequest.getText()) || createRequest.getText().isBlank())) {
            throw new BadRequestException("A post should have either text and/or an image");
        }

        Post post = postMapper.fromRequest(createRequest);

        if (Objects.nonNull(createRequest.getImage()) && !createRequest.getImage().isEmpty()) {
            String fileName = storageService.uploadFile(POSTS_IMAGE_DIR, createRequest.getImage());

            String imageUrl = ServletUriComponentsBuilder.fromRequest(request)
                    .path("/image/%s".formatted(fileName))
                    .build()
                    .toUriString();

            post.setImageUrl(imageUrl);
        }

        return postMapper.toDto(postRepository.save(post));
    }

    @Override
    public Resource getPostImage(String fileName) {
        return storageService.downloadFile(POSTS_IMAGE_DIR, fileName);
    }

    @Override
    public Page<PostDto> getAllPosts(Pageable pageable) {
        return postRepository.findAll(pageable)
                .map(postMapper::toDto);
    }
}
