package com.cosmos.solaris.database;

import com.cosmos.solaris.database.entities.DutEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DutJPARepository extends JpaRepository<DutEntity, Integer> {
}
