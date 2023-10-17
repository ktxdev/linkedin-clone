package com.ktxdev.linkedinclone.auth.jwt;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;
import java.util.Objects;

public interface JwtService {
    String generateToken(UserDetails userDetails);
    String generateToken(Map<String, Object> extraClaims, UserDetails userDetails);
    String extractUsername(String token);

    boolean isValidToken(String token, UserDetails userDetails);
}
