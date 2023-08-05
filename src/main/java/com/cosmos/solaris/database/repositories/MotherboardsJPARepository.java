package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.MotherboardsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MotherboardsJPARepository extends JpaRepository<MotherboardsEntity, Integer> {
}
