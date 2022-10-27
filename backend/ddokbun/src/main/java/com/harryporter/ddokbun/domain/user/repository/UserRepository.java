package com.harryporter.ddokbun.domain.user.repository;

import com.harryporter.ddokbun.domain.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
