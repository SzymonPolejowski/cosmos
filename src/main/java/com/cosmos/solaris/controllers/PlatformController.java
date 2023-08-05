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
	public List<PlatformEntity> retrievePlatforms(){
		return platformJPARepository.findAll();
	}

	@GetMapping("/platforms/{id}")
	@ResponseBody
	public PlatformEntity retrieveOne(@PathVariable int id){
		PlatformEntity returning = platformJPARepository.findById(id).orElse(null);
		if(returning == null){
			throw new FieldNotFoundException("Field with requested id: " + id + " was not found.");
		}
		return returning;
	}

	@PostMapping("/platforms")
	@Transactional(value = Transactional.TxType.REQUIRES_NEW)
	public void createPlatform(@RequestBody PlatformEntity dut){
		//check for existing rows for ManyToOne joins
		dut.setProjectsByProjectId((ProjectsEntity) parseEntity(dut.getProjectsByProjectId(), projectsJPARepository));
		dut.setOperatingSystemsByOsId((OperatingSystemsEntity) parseEntity(dut.getOperatingSystemsByOsId(), operatingSystemsJPARepository));
		
		for (PowerSwitchesEntity temp :
				powerSwitchesJPARepository.findAll()) {
			if (dut.getPowerSwitchesByWpsId().equals(temp)){
				dut.setPowerSwitchesByWpsId(temp);
				break;
			}
		}
		for (MotherboardsEntity temp:
		     motherboardsJPARepository.findAll()) {
			if (dut.getMotherboardsByMotherboardModelId().equals(temp)){
				dut.setMotherboardsByMotherboardModelId(temp);
			}
		}


		//save to database
		platformJPARepository.save(dut);
	}
}
