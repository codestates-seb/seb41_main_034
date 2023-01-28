package com.codestates.seb41_main_034.useraddress;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.auditing.entity.DateAuditable;
import com.codestates.seb41_main_034.useraddress.dto.UserAddressDto;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(indexes = @Index(name = "idx_user_address_user_id", columnList = "userId"))
public class UserAddress extends DateAuditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int userId;

    @Embedded
    private Address address;

    public UserAddressDto toDto(Long primaryId) {
        return new UserAddressDto(id, userId, address.getRecipient(), address.getAddress(),
                id.equals(primaryId), getCreatedAt(), getModifiedAt());
    }

}
