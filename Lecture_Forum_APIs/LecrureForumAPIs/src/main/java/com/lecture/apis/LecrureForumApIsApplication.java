package com.lecture.apis;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableAutoConfiguration
@ComponentScan({ "com.lecture", "com.lecture.controller", "com.lecture.repository", "com.lecture.dto" })
@EntityScan(basePackages = { "com.lecture.dto" })
@EnableJpaRepositories(basePackages = { "com.lecture.repository" })
@EnableTransactionManagement
public class LecrureForumApIsApplication {

	public static void main(String[] args) {
		SpringApplication.run(LecrureForumApIsApplication.class, args);
	}

}
