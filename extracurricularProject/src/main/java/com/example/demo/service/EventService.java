package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Event;
import com.example.demo.repository.EventRepository;

@Service
public class EventService {
	@Autowired
	private EventRepository eventRepository;
	
	public Event saveEvent(Event event) {
		return eventRepository.save(event);
	}
	
	public Event getEventByName(String name) {
        return eventRepository.findById(name).orElse(null);
    }
	
	public List<Event> getAllEvents(){
		return eventRepository.findAll();
	}
	
	public void deleteEventByName(String name) {
		Event event=eventRepository.findByName(name);
		if(event!=null) {
			eventRepository.delete(event);
		}
		else {
	        throw new IllegalArgumentException("Event with name " + name + " not found");
	    }
		eventRepository.deleteById(name);
	}
	
}
