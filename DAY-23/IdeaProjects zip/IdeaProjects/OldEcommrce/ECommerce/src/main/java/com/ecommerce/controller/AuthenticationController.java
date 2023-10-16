package com.ecommerce.controller;

import com.ecommerce.constant.Api;
import com.ecommerce.entity.Deleteuser;
import com.ecommerce.entity.User;
import com.ecommerce.request.AuthenticationRequest;
import com.ecommerce.request.RegisterRequest;
import com.ecommerce.response.AuthenticationResponse;
import com.ecommerce.service.AuthService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ecommerce.service.AuthService;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = authService.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registered successfully")
                : ResponseEntity.badRequest().body("Sommething went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authService.userAuthentication(request));
    }

    @GetMapping("/getAllUsers")
    public List<User> getAllUsers()
    {
        return authService.getAllUsers();
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<AuthenticationResponse> getById(@PathVariable(name = "id")Long id){

        return ResponseEntity.ok().body(authService.getById(id));
    }

    @DeleteMapping("/deleteUser")

    public void deleteUser(@RequestBody Deleteuser du)
    {
        authService.deleteUser(du.getId());
    }
}
