package com.cosmos.solaris.database.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "projects", schema = "Solaris")
public class ProjectsEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "project_id", nullable = false)
	private int projectId;
	@Basic
	@Column(name = "name", nullable = true, length = -1)
	private String name;
	@OneToMany(mappedBy = "projectsByProjectId")
	private Collection<DutEntity> dutsByProjectId;

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ProjectsEntity that = (ProjectsEntity) o;
		return projectId == that.projectId && Objects.equals(name, that.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(projectId, name);
	}

	public Collection<DutEntity> getDutsByProjectId() {
		return dutsByProjectId;
	}

	public void setDutsByProjectId(Collection<DutEntity> dutsByProjectId) {
		this.dutsByProjectId = dutsByProjectId;
	}
}
