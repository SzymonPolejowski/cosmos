package com.cosmos.solaris.controllers.util;

import com.cosmos.solaris.database.entities.DatabaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class entityParser {
	//This checks for existing entity in database, helpful whn handling ManyToOne joins
	static public DatabaseEntity parseEntity(DatabaseEntity entity, JpaRepository repository){
		for (Object temp:
				repository.findAll()) {
			if (entity.equals(temp)){
				return (DatabaseEntity) temp;
			}
		}
		return entity;
	}
}
