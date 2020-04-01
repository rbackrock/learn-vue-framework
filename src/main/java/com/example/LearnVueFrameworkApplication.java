package com.example;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@EnableTransactionManagement
@MapperScan(basePackages="com.example.dao")
public class LearnVueFrameworkApplication {

	public static void main(String[] args) {
		SpringApplication.run(LearnVueFrameworkApplication.class, args);
	}

}
