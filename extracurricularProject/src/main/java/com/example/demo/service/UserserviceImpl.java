package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserserviceImpl implements Userservice{
	@Autowired
	public UserRepository userRespository;

	@Override
	public User checkuserlogin(String username, String epwd) {
		// TODO Auto-generated method stub
		
		return userRespository.checkuserlogin(username, epwd);
	}
	
}
