package com.cosmos.solaris.controllers;

import com.cosmos.solaris.database.DutJPARepository;
import com.cosmos.solaris.database.entities.DutEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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

}
