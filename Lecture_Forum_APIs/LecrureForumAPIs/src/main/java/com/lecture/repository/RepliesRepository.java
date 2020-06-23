package com.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lecture.dto.Replies;

@Repository
public interface RepliesRepository extends JpaRepository<Replies, Integer> {

}
