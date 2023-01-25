package com.codestates.seb41_main_034.auth.userdetails;

import com.codestates.seb41_main_034.auth.utils.CustomAuthorityUtils;
import com.codestates.seb41_main_034.exception.BusinessLogicException;
import com.codestates.seb41_main_034.exception.ExceptionCode;
import com.codestates.seb41_main_034.user.entity.User;
import com.codestates.seb41_main_034.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailService implements UserDetailsService {
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils ;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalMember = userRepository.findByusername(username);
        User finduser = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return new UserDetails(finduser);
    }

    private final class UserDetails extends User implements org.springframework.security.core.userdetails.UserDetails {
        UserDetails(User user) {
            setUserId(user.getUserId());
            setUsername(user.getUsername());
            setDisplayName(user.getDisplayName());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
