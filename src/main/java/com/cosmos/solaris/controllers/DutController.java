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
public class DutController {
	DutJPARepository dutJPARepository;
	EqTypeJPARepository eqTypeJPARepository;
	MotherboardsJPARepository motherboardsJPARepository;
	OperatingSystemsJPARepository operatingSystemsJPARepository;
	PowerSwitchesJPARepository powerSwitchesJPARepository;
	ProjectsJPARepository projectsJPARepository;

	@Autowired
	public DutController(DutJPARepository dutJPARepository, EqTypeJPARepository eqTypeJPARepository, MotherboardsJPARepository motherboardsJPARepository, OperatingSystemsJPARepository operatingSystemsJPARepository, PowerSwitchesJPARepository powerSwitchesJPARepository, ProjectsJPARepository projectsJPARepository) {
		this.dutJPARepository = dutJPARepository;
		this.eqTypeJPARepository = eqTypeJPARepository;
		this.motherboardsJPARepository = motherboardsJPARepository;
		this.operatingSystemsJPARepository = operatingSystemsJPARepository;
		this.powerSwitchesJPARepository = powerSwitchesJPARepository;
		this.projectsJPARepository = projectsJPARepository;
	}

	@GetMapping("/duts")
	public List<DutEntity> retrieveDuts(){
		return dutJPARepository.findAll();
	}

	@GetMapping("/duts/{id}")
	@ResponseBody
	public DutEntity retrieveOne(@PathVariable int id){
		DutEntity returning = dutJPARepository.findById(id).orElse(null);
		if(returning == null){
			throw new FieldNotFoundException("Field with requested id: " + id + " was not found.");
		}
		return returning;
	}

	@PostMapping("/duts")
	@Transactional(value = Transactional.TxType.REQUIRES_NEW)
	public void createDut(@RequestBody DutEntity dut){
		//check for existing rows for ManyToOne joins
		dut.setProjectsByProjectId((ProjectsEntity) parseEntity(dut.getProjectsByProjectId(), projectsJPARepository));
		for (OperatingSystemsEntity temp :
				operatingSystemsJPARepository.findAll()) {
			if (dut.getOperatingSystemsByOsId().equals(temp)){
				dut.setOperatingSystemsByOsId(temp);
				break;
			}
		}
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
		dutJPARepository.save(dut);
	}
}
