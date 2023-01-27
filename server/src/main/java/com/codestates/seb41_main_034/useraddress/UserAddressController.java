package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.common.response.Response;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressDto;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressPatchDto;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressPostDto;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@AllArgsConstructor
@RestController
@Validated
@RequestMapping("/api/v1/user-address")
public class UserAddressController {

    private final UserAddressFacade userAddressFacade;

    @PostMapping
    public ResponseEntity<Response<UserAddressDto>> postUserAddress(
            @Valid @RequestBody UserAddressPostDto postDto) {
        return new ResponseEntity<>(Response.of(userAddressFacade.createUserAddress(postDto)), HttpStatus.CREATED);
    }

    @GetMapping("/{userAddressId}")
    public ResponseEntity<Response<UserAddressDto>> getUserAddress(@Positive @PathVariable long userAddressId) {
        return new ResponseEntity<>(Response.of(userAddressFacade.readUserAddress(userAddressId)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Response<List<UserAddressDto>>> getUserAddressList() {
        return new ResponseEntity<>(Response.of(userAddressFacade.readUserAddressList()), HttpStatus.OK);
    }

    @PatchMapping("/{userAddressId}")
    public ResponseEntity<Response<UserAddressDto>> patchUserAddress(
            @Positive @PathVariable long userAddressId, @Valid @RequestBody UserAddressPatchDto patchDto) {
        return new ResponseEntity<>(
                Response.of(userAddressFacade.updateUserAddress(userAddressId, patchDto)), HttpStatus.OK);
    }

    @DeleteMapping("/{userAddressId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUserAddress(@Positive @PathVariable long userAddressId) {
        userAddressFacade.deleteUserAddress(userAddressId);
    }

}
