package com.example.demo.service;

import com.example.demo.model.User;

public interface Userservice {
	public User checkuserlogin(String username, String epwd);
}