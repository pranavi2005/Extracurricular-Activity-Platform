package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.Userservice;


@RestController
@RequestMapping("/api/save-user")
public class UserController {
	@Autowired
	public Userservice userservice;
	@GetMapping("/login") 
	 public User login(@RequestParam("user") String username,@RequestParam("pwd") String password) { 
		System.out.println("Username: " + username + ", Password: " + password);
		return userservice.checkuserlogin(username,password); 
	 }
	@PostMapping("/addStudent")
	public User addStudent(@RequestBody User user) {
		return userservice.saveUser(user);
	}
	@GetMapping("/getAllStudents")
	public List<User> getAllStudents(){
		return userservice.getAllStudents();
	}
	@DeleteMapping("/deleteStudent/{username}")
	public void deleteStudent(@PathVariable String username) {
		try {
		userservice.deleteUserByUsername(username);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}
}
