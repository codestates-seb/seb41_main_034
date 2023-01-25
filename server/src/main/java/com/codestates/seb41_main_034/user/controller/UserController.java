package com.codestates.seb41_main_034.user.controller;

import com.codestates.seb41_main_034.user.dto.UserPostDto;
import com.codestates.seb41_main_034.user.dto.UserResponseDto;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.mapper.UserMapper;
import com.codestates.seb41_main_034.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@CrossOrigin
@RequestMapping("/users")
@Validated
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    //회원가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto) {
        User user = userService.createUser(mapper.userPostDtoToUser(userPostDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(user),
                HttpStatus.CREATED);
    }

//    @GetMapping("/{user-id}")
//    public ResponseEntity getMember(
//            @PathVariable("member-id") @Positive long userId) {
//        User userName = userService.findUser(userName);
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
//                , HttpStatus.OK);
    
}

