package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressRequestDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
@Transactional
public class UserAddressService {

    private final UserAddressRepository userAddressRepository;

    public UserAddress createUserAddress(UserAddressRequestDto requestDto) {
        UserAddress userAddress = new UserAddress();

        Address address = new Address(requestDto.getRecipient(), requestDto.getZonecode(),
                requestDto.getAddress(), requestDto.getDetailAddress(), requestDto.getPhone());
        userAddress.setAddress(address);

        return userAddressRepository.save(userAddress);
    }

    @Transactional(readOnly = true)
    public UserAddress readUserAddress(long userAddressId) {
        return userAddressRepository.findById(userAddressId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_ADDRESS_NOT_FOUND));
    }

    @Transactional(readOnly = true)
    public List<UserAddress> readUserAddressList(int createdBy) {
        return userAddressRepository.findByCreatedBy(createdBy);
    }

    public UserAddress updateUserAddress(long userAddressId, UserAddressRequestDto requestDto) {
        UserAddress userAddress = readUserAddress(userAddressId);

        Address address = new Address(requestDto.getRecipient(), requestDto.getZonecode(),
                requestDto.getAddress(), requestDto.getDetailAddress(), requestDto.getPhone());

        userAddress.setAddress(address);

        return userAddress;
    }

    public void deleteUserAddress(long userAddressId) {
        UserAddress userAddress = readUserAddress(userAddressId);

        userAddress.setDeleted(true);
    }

}
