package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.DutEntity;
import com.cosmos.solaris.database.entities.ProjectsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectsJPARepository extends JpaRepository<ProjectsEntity, Integer> {
}
