package com.codestates.seb41_main_034.user.controller;

import com.codestates.seb41_main_034.common.response.Response;
import com.codestates.seb41_main_034.user.dto.UserDto;
import com.codestates.seb41_main_034.user.dto.UserPatchDto;
import com.codestates.seb41_main_034.user.dto.UserPostDto;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/user")
@Validated
public class UserController {
    private final UserService userService;

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        UserDto userDto = userService.createUser(userPostDto);

        return new ResponseEntity<>(Response.of(userDto),
                HttpStatus.CREATED);
    }

    @GetMapping("/duplicate-check")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void getDuplicateCheck(@NotBlank @RequestParam String username) {
        userService.verifyExistsUsername(username);
    }

    @GetMapping("/login-status")
    public ResponseEntity getLoginStatus(@AuthenticationPrincipal User user) {
        return new ResponseEntity<>(Response.of(user.toDto()), HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(
            @PathVariable("user-id") @Positive int userId) {
        UserDto userDto = userService.findUser(userId);
        return new ResponseEntity<>(Response.of(userDto)
                , HttpStatus.OK);
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity<?> edit(
            @PathVariable("user-id") @Positive int userId, @RequestBody UserPatchDto userPatchDto) {
        UserDto userDto = userService.editUser(userId, userPatchDto);

        return new ResponseEntity<>(Response.of(userDto)
                , HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(
            @PathVariable("user-id") @Positive int userId) {
        userService.deleteUser(userId);
    }
}

