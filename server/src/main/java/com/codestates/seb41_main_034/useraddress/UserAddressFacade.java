package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.service.UserService;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressDto;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressPatchDto;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressPostDto;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserAddressFacade {

    private final UserAddressService userAddressService;

    private final UserService userService;

    @Transactional
    public UserAddressDto createUserAddress(UserAddressPostDto postDto) {
        int userId = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();

        Address address = new Address(postDto.getRecipient(), postDto.getAddress());

        UserAddress userAddress = userAddressService.createUserAddress(userId, address);

        User user = userService.findVerifiedUserById(userId);
        long primaryId;
        if (postDto.isPrimary()) {
            primaryId = userAddress.getId();
            user.setPrimaryAddressId(primaryId);
        } else {
            primaryId = user.getPrimaryAddressId();
        }

        return userAddress.toDto(primaryId);
    }

    // TODO: 조회, 수정, 삭제는 회원 인증 정보로 인가해야 한다.

    public UserAddressDto readUserAddress(long userAddressId) {
        UserAddress userAddress = userAddressService.readUserAddress(userAddressId);

        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!user.getRoles().contains("ADMIN") && user.getId() != userAddress.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        return userAddress.toDto(user.getPrimaryAddressId());
    }

    public List<UserAddressDto> readUserAddressList() {
        int userId = ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();

        List<UserAddress> userAddressList = userAddressService.readUserAddressList(userId);

        long primaryId = userService.findVerifiedUserById(userId).getPrimaryAddressId();

        return userAddressList.stream()
                .map(userAddress -> userAddress.toDto(primaryId)).sorted((dto1, dto2) -> {
                    if (dto1.isPrimary() == dto2.isPrimary()) {
                        return 0;
                    }
                    if (dto1.isPrimary()) {
                        return -1;
                    }
                    return 1;
                }).collect(Collectors.toList());
    }

    @Transactional
    public UserAddressDto updateUserAddress(long userAddressId, UserAddressPatchDto patchDto) {
        UserAddress userAddress = userAddressService.readUserAddress(userAddressId);

        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authUser.getRoles().contains("ADMIN") && authUser.getId() != userAddress.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        UserAddress updatedUserAddress = userAddressService.updateUserAddress(userAddressId, patchDto);

        User user = userService.findVerifiedUserById(updatedUserAddress.getUserId());
        long primaryId;
        if (patchDto.isPrimary()) {
            primaryId = updatedUserAddress.getId();
            user.setPrimaryAddressId(primaryId);
        } else {
            primaryId = user.getPrimaryAddressId();
        }

        return updatedUserAddress.toDto(primaryId);
    }

    public void deleteUserAddress(long userAddressId) {
        UserAddress userAddress = userAddressService.readUserAddress(userAddressId);

        User authUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        if (!authUser.getRoles().contains("ADMIN") && authUser.getId() != userAddress.getUserId()) {
            throw new BusinessLogicException(ExceptionCode.AUTH_FORBIDDEN);
        }

        User user = userService.findVerifiedUserById(userAddress.getUserId());

        if (userAddress.getId() == user.getPrimaryAddressId()) {
            throw new BusinessLogicException(ExceptionCode.USER_ADDRESS_CANNOT_DELETE);
        }

        userAddressService.deleteUserAddress(userAddressId);
    }

}
