package com.cosmos.solaris.controllers;

import com.cosmos.solaris.database.entities.*;
import com.cosmos.solaris.database.repositories.*;
import com.cosmos.solaris.exceptions.FieldNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.cosmos.solaris.controllers.util.entityParser.parseEntity;

@RestController
public class PlatformController {
	PlatformJPARepository platformJPARepository;
	EqTypeJPARepository eqTypeJPARepository;
	MotherboardsJPARepository motherboardsJPARepository;
	OperatingSystemsJPARepository operatingSystemsJPARepository;
	PowerSwitchesJPARepository powerSwitchesJPARepository;
	ProjectsJPARepository projectsJPARepository;

	@Autowired
	public PlatformController(PlatformJPARepository platformJPARepository, EqTypeJPARepository eqTypeJPARepository, MotherboardsJPARepository motherboardsJPARepository, OperatingSystemsJPARepository operatingSystemsJPARepository, PowerSwitchesJPARepository powerSwitchesJPARepository, ProjectsJPARepository projectsJPARepository) {
		this.platformJPARepository = platformJPARepository;
		this.eqTypeJPARepository = eqTypeJPARepository;
		this.motherboardsJPARepository = motherboardsJPARepository;
		this.operatingSystemsJPARepository = operatingSystemsJPARepository;
		this.powerSwitchesJPARepository = powerSwitchesJPARepository;
		this.projectsJPARepository = projectsJPARepository;
	}

	@GetMapping("/platforms")
	public List<PlatformsEntity> retrievePlatforms(){
		return platformJPARepository.findAll();
	}

	@GetMapping("/platforms/{id}")
	@ResponseBody
	public PlatformsEntity retrieveOne(@PathVariable int id){
		PlatformsEntity returning = platformJPARepository.findById(id).orElse(null);
		if(returning == null){
			throw new FieldNotFoundException("Field with requested id: " + id + " was not found.");
		}
		return returning;
	}

	@PostMapping("/platforms")
	@Transactional(value = Transactional.TxType.REQUIRES_NEW)
	public void createPlatform(@RequestBody PlatformsEntity platform){
		//check for existing rows for ManyToOne joins
		platform.setProjectsByProjectId((ProjectsEntity) parseEntity(platform.getProjectsByProjectId(), projectsJPARepository));
		platform.setOperatingSystemsByOsId((OperatingSystemsEntity) parseEntity(platform.getOperatingSystemsByOsId(), operatingSystemsJPARepository));
		
		for (PowerSwitchesEntity temp :
				powerSwitchesJPARepository.findAll()) {
			if (platform.getPowerSwitchesByWpsId().equals(temp)){
				platform.setPowerSwitchesByWpsId(temp);
				break;
			}
		}
		for (MotherboardsEntity temp:
		     motherboardsJPARepository.findAll()) {
			if (platform.getMotherboardsByMotherboardModelId().equals(temp)){
				platform.setMotherboardsByMotherboardModelId(temp);
			}
		}


		//save to database
		platformJPARepository.save(platform);
	}
}
