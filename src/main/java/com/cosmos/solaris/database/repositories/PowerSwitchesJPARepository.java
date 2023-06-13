package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.DutEntity;
import com.cosmos.solaris.database.entities.PowerSwitchesEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PowerSwitchesJPARepository extends JpaRepository<PowerSwitchesEntity, Integer> {
}
