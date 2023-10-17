package com.ktxdev.linkedinclone.auth;

import com.ktxdev.linkedinclone.auth.jwt.JwtService;
import com.ktxdev.linkedinclone.users.User;
import com.ktxdev.linkedinclone.users.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final JwtService jwtService;
    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    @Override
    public AuthenticationResponse signUp(SignUpRequest signUpRequest) {
        User user = userService.createUser(signUpRequest);

        final String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }

    @Override
    public AuthenticationResponse signIn(AuthenticationRequest authenticationRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.email(),
                authenticationRequest.password()));

        final User user = userService.findByEmail(authenticationRequest.email())
                .orElseThrow(() -> new UsernameNotFoundException("Invalid Credential"));

        final String token = jwtService.generateToken(user);

        return new AuthenticationResponse(token);
    }
}
