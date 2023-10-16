package com.ecommerce.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Optional;

import com.ecommerce.entity.User;
import com.ecommerce.entity.enumerate.Role;
import com.ecommerce.repository.UserRepository;
import com.ecommerce.request.AuthenticationRequest;
import com.ecommerce.request.RegisterRequest;
import com.ecommerce.response.AuthenticationResponse;
import com.ecommerce.util.JwtUtil;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import java.util.*;
@Service
@Transactional
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;


    public boolean userRegistration(RegisterRequest request) {
        Optional<User> isUserExists = userRepository.findByEmail(request.getEmail());
        if (!isUserExists.isPresent()) {
            var user = User.builder()
                    .name(request.getName())
                    .email(request.getEmail())
                    .password(passwordEncoder.encode(request.getPassword()))
                    .isEnabled(true)
                    .role(Role.valueOf(request.getRole().toUpperCase()))
                    .build();
            userRepository.save(user);
            return true;
        } else {
            return false;
        }
    }

    public List<User> getAllUsers()
    {
       return userRepository.getAllUsers();
    }
    public void deleteUser(int id)
    {
        userRepository.deleteUser(id);
    }
    public AuthenticationResponse userAuthentication(AuthenticationRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        user.setLogin_time(new Timestamp(new Date().getTime()));
        userRepository.save(user);
        return AuthenticationResponse.builder()
                .token(token)
                .uid(user.getUid())
                .email(user.getEmail())
                .name(user.getName())
                .fire(user.getFire())
                .heart(user.getHeart())
                .build();
    }

    public AuthenticationResponse getById(Long id){
        User isExists = userRepository.findByUid(id);

        if(isExists!=null){

            System.out.println(isExists.getEmail());

            return  AuthenticationResponse.builder()
                    .uid(isExists.getUid())
                    .email(isExists.getEmail())
                    .name(isExists.getName())
                    .fire(isExists.getFire())
                    .heart(isExists.getHeart())
                    .build();
        }
        return  AuthenticationResponse.builder()
                    .uid(null)
                    .email(null)
                    .name(null)
                    .fire(null)
                    .heart(null)
                    .build();

     }
}