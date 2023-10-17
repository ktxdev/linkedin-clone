package com.ktxdev.linkedinclone.users;

import com.ktxdev.linkedinclone.auth.SignUpRequest;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface UserService {
    User createUser(SignUpRequest signUpRequest);
    UserDto myProfile(User user);
    void uploadProfileImage(User user, MultipartFile file, HttpServletRequest request);
    Resource getProfileImage(String user, String fileName);
    Optional<User> findByEmail(String email);
}
