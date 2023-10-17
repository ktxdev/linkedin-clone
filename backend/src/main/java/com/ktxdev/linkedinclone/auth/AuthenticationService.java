package com.ktxdev.linkedinclone.auth;

public interface AuthenticationService {
    AuthenticationResponse signUp(SignUpRequest signUpRequest);
    AuthenticationResponse signIn(AuthenticationRequest authenticationRequest);
}
