package com.cosmos.solaris.controllers;

import com.cosmos.solaris.database.DutJPARepository;
import com.cosmos.solaris.database.entities.DutEntity;
import com.cosmos.solaris.exceptions.FieldNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DutController {
	DutJPARepository repository;

	@Autowired
	public DutController(DutJPARepository repository) {
		this.repository = repository;
	}

	@GetMapping("/duts")
	public List<DutEntity> retrieveDuts(){
		return repository.findAll();
	}

	@GetMapping("/duts/{id}")
	@ResponseBody
	public DutEntity retrieveOne(@PathVariable int id){
		DutEntity returning = repository.findById(id).orElse(null);
		if(returning == null){
			throw new FieldNotFoundException("Field with requested id: " + id + " was not found.");
		}
		return returning;
	}

}
