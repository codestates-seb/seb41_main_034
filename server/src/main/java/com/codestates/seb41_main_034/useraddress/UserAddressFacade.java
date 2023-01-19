package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.useraddress.dto.UserAddressDto;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class UserAddressFacade {

    private final UserAddressService userAddressService;

    public UserAddressDto createUserAddress(UserAddressRequestDto requestDto) {
        UserAddress userAddress = userAddressService.createUserAddress(requestDto);

        // TODO: 회원 정보에서 대표 주소로 설정해야 한다.

        return userAddress.toDto(null);
    }

    // TODO: 조회, 수정, 삭제는 회원 인증 정보로 인가해야 한다.

    public UserAddressDto readUserAddress(long userAddressId) {
        UserAddress userAddress = userAddressService.readUserAddress(userAddressId);

        // TODO: 회원 정보에서 대표 주소 ID를 알아내야 한다.

        return userAddress.toDto(null);
    }

    public List<UserAddressDto> readUserAddressList() {
        // TODO: 인증된 회원 ID를 가져와야 한다.
        int createdBy = 1;

        List<UserAddress> userAddressList = userAddressService.readUserAddressList(createdBy);

        // TODO: 회원 정보에서 대표 주소 ID를 알아내야 한다.

        return userAddressList.stream()
                .map(userAddress -> userAddress.toDto(null)).collect(Collectors.toList());
    }

    public UserAddressDto updateUserAddress(long userAddressId, UserAddressRequestDto requestDto) {
        UserAddress userAddress = userAddressService.updateUserAddress(userAddressId, requestDto);

        // TODO: 회원 정보에서 대표 주소를 설정해야 한다.
        //       회원 정보에서 대표 주소 ID를 알아내야 한다.

        return userAddress.toDto(null);
    }

    public void deleteUserAddress(long userAddressId) {
        userAddressService.deleteUserAddress(userAddressId);

        // TODO: 삭제된 주소가 대표 주소였다면 남은 주소 중 하나를 회원 정보에서 대표 주소로 설정해야 한다.
    }

}
