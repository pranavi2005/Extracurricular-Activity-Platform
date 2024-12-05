package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserserviceImpl implements Userservice{
	@Autowired
	public UserRepository userRepository;
	
	@Override
	public User checkuserlogin(String username, String epwd) {
		// TODO Auto-generated method stub
		User user=userRepository.checkuserlogin(username, epwd);
		if(user==null) {
			throw new IllegalArgumentException("Invalid credentials");
		}
		return userRepository.checkuserlogin(username, epwd);
	}
	@Override
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	@Override
	public List<User>getAllStudents(){
		return userRepository.findAll();
	}
	@Override
	@Transactional
	public void deleteUserByUsername(String username) {
		userRepository.deleteByUsername(username);
	}
}
