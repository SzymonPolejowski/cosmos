package com.cosmos.solaris.database.repositories;

import com.cosmos.solaris.database.entities.PlatformEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlatformJPARepository extends JpaRepository<PlatformEntity, Integer> {
}
