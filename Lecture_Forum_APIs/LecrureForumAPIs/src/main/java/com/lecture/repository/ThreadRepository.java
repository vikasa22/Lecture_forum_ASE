package com.lecture.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lecture.dto.Threads;

@Repository
public interface ThreadRepository extends JpaRepository<Threads, Integer> {

}
