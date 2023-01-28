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
@Entity
@Table(name = "users", indexes = @Index(name = "idx_user_username", columnList = "username"))
public class User extends DateAuditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

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
        return new UserDto(id, username, displayName, roles, address.getAddress(), getCreatedAt(), getModifiedAt());
    }

    public UserDto toDto() {
        return new UserDto(id, username, displayName, roles, null, getCreatedAt(), getModifiedAt());
    }

    public String getMaskedName() {
        if (roles.contains("ADMIN")) {
            return displayName;
        }

        if (displayName.length() <= 1) {
            return "*";
        }

        if (displayName.length() == 2) {
            return displayName.charAt(0) + "*";
        }

        return displayName.charAt(0) + "*".repeat(displayName.length() - 2) +
                displayName.charAt(displayName.length() - 1);
    }
}
