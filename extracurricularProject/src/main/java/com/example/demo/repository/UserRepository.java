package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
	@Query("select e from User e where e.username=?1 and e.password=?2") 
	 public User checkuserlogin(String username, String epwd);
}
