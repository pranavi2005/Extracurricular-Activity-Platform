package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.Userservice;


@RestController
public class UserController {
	@Autowired
	public Userservice userservice;
	@GetMapping("login") 
	 public User login(@RequestParam("user") String username,@RequestParam("pwd") String password) { 
	  return userservice.checkuserlogin(username,password); 
	 }
}
