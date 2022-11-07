package com.harryporter.ddokbun.domain.user.repository;

import com.harryporter.ddokbun.domain.user.entity.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String email);
    Optional<User> findByUserSeq(Long userSeq);
    User findByUserNickname(String nickName);
    List<User> findAllBy(Pageable pageable);
}
