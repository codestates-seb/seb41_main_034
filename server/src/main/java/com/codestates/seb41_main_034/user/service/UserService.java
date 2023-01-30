package com.codestates.seb41_main_034.user.service;

import com.codestates.seb41_main_034.auth.utils.CustomAuthorityUtils;
import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.user.dto.UserDto;
import com.codestates.seb41_main_034.user.dto.UserPatchDto;
import com.codestates.seb41_main_034.user.dto.UserPostDto;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.repository.UserRepository;
import com.codestates.seb41_main_034.useraddress.UserAddress;
import com.codestates.seb41_main_034.useraddress.UserAddressService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@AllArgsConstructor
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;
    private final PasswordEncoder passwordEncoder;
    private final UserAddressService userAddressService;

    public UserDto createUser(UserPostDto userPostDto) {
        String username = userPostDto.getUsername();
        verifyExistsUsername(username);

        User user = new User();
        user.setUsername(username);
        user.setDisplayName(userPostDto.getDisplayName());

        String encryptedPassword = passwordEncoder.encode(userPostDto.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(username);
        user.setRoles(roles);

        User createdUser = userRepository.save(user);

        Address address = new Address(createdUser.getDisplayName(), userPostDto.getAddress());
        UserAddress userAddress = userAddressService.createUserAddress(createdUser.getId(), address);
        createdUser.setPrimaryAddressId(userAddress.getId());

        return createdUser.toDto(address);
    }

    @Transactional(readOnly = true)
    public UserDto findUser(int userId) {
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authUser.getRoles().contains("ADMIN") && authUser.getId() != userId) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        User user = authUser.getId() == userId ? authUser : findVerifiedUserById(userId);

        UserAddress userAddress = userAddressService.readUserAddress(user.getPrimaryAddressId());

        return user.toDto(userAddress.getAddress());
    }

    public UserDto editUser(int userId, UserPatchDto userPatchDto) {
        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authUser.getRoles().contains("ADMIN") && authUser.getId() != userId) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }
        User user = findVerifiedUserById(userId);

        Optional.ofNullable(userPatchDto.getDisplayName()).ifPresent(user::setDisplayName);

        Optional.ofNullable(userPatchDto.getNewPassword()).ifPresent(newPassword -> {
            String oldPassword = userPatchDto.getOldPassword();
            if (oldPassword != null && passwordEncoder.matches(oldPassword, user.getPassword())) {
                user.setPassword(passwordEncoder.encode(newPassword));
            } else {
                throw new BusinessLogicException(ExceptionCode.USER_WRONG_PASSWORD);
            }
        });

        return user.toDto();
    }

    public void deleteUser(int userId) {
        User user = findVerifiedUserById(userId);

        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authUser.getRoles().contains("ADMIN") && !Objects.equals(authUser.getId(), user.getId())) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        user.setDeleted(true);
    }

    public void checkPassword(String password) {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BusinessLogicException(ExceptionCode.USER_WRONG_PASSWORD);
        }
    }

    @Transactional(readOnly = true)
    public User findVerifiedUserById(int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);

        return optionalUser.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public User findVerifiedUserByUsername(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public void verifyExistsUsername(String username) {
        if (userRepository.existsByUsername(username)) {
            throw new BusinessLogicException(ExceptionCode.USER_USERNAME_EXISTS);
        }
    }

    @Transactional(readOnly = true)
    public List<User> getVerifiedUsers(Set<Integer> ids) {
        List<User> users = userRepository.findAllById(ids);

        if (users.size() != ids.size()) {
            throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
        }

        return users;
    }

}


