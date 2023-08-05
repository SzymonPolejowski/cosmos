package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.PlatformsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatformJPARepository extends JpaRepository<PlatformsEntity, Integer> {
}
