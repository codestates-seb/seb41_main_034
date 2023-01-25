package com.codestates.seb41_main_034.user.service;

import com.codestates.seb41_main_034.exception.BusinessLogicException;
import com.codestates.seb41_main_034.exception.ExceptionCode;
import com.codestates.seb41_main_034.user.dto.UserResponseDto;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.mapper.UserMapper;
import com.codestates.seb41_main_034.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper mapper;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, UserMapper mapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.mapper = mapper;
        this.passwordEncoder = passwordEncoder;
    }

    public User createUser(User user) {
        verifyexistsidusername(user.getUsername());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = new ArrayList<>();
        roles.add("USER");
        user.setRoles(roles);

        return userRepository.save(user);
    }

    public User findUser(long userId) {
        return findVerifiedUserById(userId);
    }
    private User findVerifiedUserById(long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User foundUser = optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return foundUser;
    }

    private void verifyexistsidusername(String username) {
        Optional<User> user = userRepository.findByusername(username);

        if (user.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
        }
    }
}


