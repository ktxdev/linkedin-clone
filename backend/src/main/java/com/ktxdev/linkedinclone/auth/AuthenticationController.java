package com.ktxdev.linkedinclone.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("sign-in")
    public AuthenticationResponse signIn(@RequestBody AuthenticationRequest authenticationRequest) {
        return authenticationService.signIn(authenticationRequest);
    }

    @PostMapping("sign-up")
    public AuthenticationResponse signUp(@RequestBody SignUpRequest signUpRequest) {
        return authenticationService.signUp(signUpRequest);
    }
}
