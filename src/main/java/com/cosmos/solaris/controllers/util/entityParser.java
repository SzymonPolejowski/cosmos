package com.cosmos.solaris.controllers.util;

import com.cosmos.solaris.database.entities.DBEntity;
import com.cosmos.solaris.database.entities.ProjectsEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class entityParser {
	static public DBEntity parseEntity(DBEntity entity, JpaRepository repository){

		for (Object temp:
				repository.findAll()) {
			if (entity.equals(temp)){
				return (DBEntity) temp;
			}
		}
		return entity;
	}
}
