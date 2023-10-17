package com.ktxdev.linkedinclone.users;

import com.ktxdev.linkedinclone.auth.SignUpRequest;
import com.ktxdev.linkedinclone.exceptions.BadRequestException;
import com.ktxdev.linkedinclone.storage.StorageService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final StorageService storageService;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    @Override
    public User createUser(SignUpRequest signUpRequest) {
        if (userRepository.existsByEmail(signUpRequest.email())) {
            throw new BadRequestException("Email is already in use");
        }

        if (!signUpRequest.password().equals(signUpRequest.passwordConfirm())) {
            throw new BadRequestException("Passwords do not match");
        }

        User user = userMapper.fromRequest(signUpRequest);
        user.setPassword(passwordEncoder.encode(signUpRequest.password()));

        return userRepository.save(user);
    }

    @Override
    public UserDto myProfile(User user) {
        return userMapper.toDto(user);
    }

    @Override
    public void uploadProfileImage(User user, MultipartFile file, HttpServletRequest request) {
        String fileName = storageService.uploadFile( "profiles/%s".formatted(user.getId().toString()) ,file);

        String profileImageUrl = ServletUriComponentsBuilder.fromRequest(request)
                .path("/%s/%s".formatted(user.getId().toString(), fileName))
                .build()
                .toUriString();

        user.setProfileImageUrl(profileImageUrl);
        userRepository.save(user);
    }

    @Override
    public Resource getProfileImage(String userId, String fileName) {
        return storageService.downloadFile("profiles/%s".formatted(userId), fileName);
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
