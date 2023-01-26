package com.codestates.seb41_main_034.user.entity;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.auditing.entity.DateAuditable;
import com.codestates.seb41_main_034.user.dto.UserDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "USERS")
public class User extends DateAuditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String displayName;

    @Column(nullable = false)
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @Column(nullable = false)
    private long primaryAddressId;

    public UserDto toDto(Address address) {
        return new UserDto(id, username, displayName, roles,
                address.getZonecode(), address.getAddress(), address.getDetailAddress(), address.getPhone(),
                getCreatedAt(), getModifiedAt());
    }

    public UserDto toDto() {
        return new UserDto(id, username, displayName, roles,
                null, null, null, null,
                getCreatedAt(), getModifiedAt());
    }
}
