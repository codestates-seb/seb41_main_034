package com.codestates.seb41_main_034.user.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "USERS")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false, updatable = false, unique = true)
    private String username;

    @Column(nullable = false, updatable = false, unique = true)
    private String displayName;

    @Column(nullable = false, updatable = false)
    private String password;

    @Column(length = 12, nullable = false, updatable = false, unique = true)
    private String phoneNumber;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

    @Column(name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now(ZoneId.of("Asia/Seoul"));

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
