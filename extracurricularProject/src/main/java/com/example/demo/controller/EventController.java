package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Event;
import com.example.demo.service.EventService;

@RestController
@RequestMapping("/api")
public class EventController {
	
	@Autowired
	private EventService eventService;
	
	@PostMapping("/events")
	public ResponseEntity<String> addEvent(@RequestBody Event event) {
		eventService.saveEvent(event);
		return ResponseEntity.status(HttpStatus.CREATED).body("Event added successfully.");
	}
	
	@GetMapping("/events")
	public List<Event> getEvents(){
		return eventService.getAllEvents();
	}
	
	@PutMapping("/events/{name}")
    public ResponseEntity<String> updateEvent(@PathVariable String name, @RequestBody Event event) {
        // Ensure the event exists, and update it
        Event existingEvent = eventService.getEventByName(name);
        if (existingEvent != null) {
            existingEvent.setName(event.getName());
            existingEvent.setDate(event.getDate());
            existingEvent.setTime(event.getTime());
            existingEvent.setVenue(event.getVenue());
            eventService.saveEvent(existingEvent);
            return ResponseEntity.ok("Event updated successfully.");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found.");
    }
	
	@DeleteMapping("/events/{name}")
	public ResponseEntity<String> deleteEvent(@PathVariable String name){
		Event existingEvent=eventService.getEventByName(name);
		if(existingEvent!=null) {
			eventService.deleteEventByName(name);
			return ResponseEntity.ok("Event canceled successfully.");
		}
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event not found.");
	}
	
}
