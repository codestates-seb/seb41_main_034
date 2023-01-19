package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressDto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class UserAddress extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Embedded
    private Address address;

    public UserAddressDto toDto(Long primaryId) {
        return new UserAddressDto(id, address.getRecipient(), address.getZonecode(), address.getAddress(),
                address.getDetailAddress(), address.getPhone(), id.equals(primaryId),
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

}
