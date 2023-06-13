package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.OperatingSystemsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OperatingSystemsJPARepository extends JpaRepository<OperatingSystemsEntity, Integer> {
}
