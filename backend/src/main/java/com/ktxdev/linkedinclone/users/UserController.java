package com.ktxdev.linkedinclone.users;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    @GetMapping("my-profile")
    public UserDto myProfile(@AuthenticationPrincipal User user) {
        return userService.myProfile(user);
    }

    @PatchMapping("profile/avatar")
    public void uploadProfileImage(@AuthenticationPrincipal User user,
                                   @RequestPart("avatar") MultipartFile file,
                                   HttpServletRequest request) {
        userService.uploadProfileImage(user, file, request);
    }

    @GetMapping(value = "profile/avatar/{userId}/{fileName}",
            produces = {MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE})
    public Resource getProfileImage(@PathVariable String userId, @PathVariable String fileName) {
        return userService.getProfileImage(userId, fileName);
    }
}
