package com.codestates.seb41_main_034.user.mapper;

import com.codestates.seb41_main_034.user.dto.UserPostDto;
import com.codestates.seb41_main_034.user.dto.UserResponseDto;
import com.codestates.seb41_main_034.user.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostDtoToUser(UserPostDto userPostDto);
    UserResponseDto userToUserResponseDto(User user);
}
