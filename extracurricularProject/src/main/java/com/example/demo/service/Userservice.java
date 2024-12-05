package com.example.demo.service;

import java.util.List;

import com.example.demo.model.User;

public interface Userservice {
	public User checkuserlogin(String username, String epwd);
	public User saveUser(User user);
	List<User>getAllStudents();
	void deleteUserByUsername(String username);
}