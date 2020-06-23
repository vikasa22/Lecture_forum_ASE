package com.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lecture.dto.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {

}
