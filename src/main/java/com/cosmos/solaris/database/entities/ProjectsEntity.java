package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "projects", schema = "Solaris")
public class ProjectsEntity implements DatabaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "project_id", nullable = false)
	@JsonIgnore
	private int projectId;
	@Basic
	@Column(name = "name", nullable = true, length = -1)
	@JsonProperty("projectName")
	private String name;
	@OneToMany(mappedBy = "projectsByProjectId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "projects")
	private Collection<PlatformsEntity> platformsByProjectId;

	public ProjectsEntity() {
	}

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
		return Objects.equals(name, that.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(projectId, name);
	}

	public Collection<PlatformsEntity> getPlatformsByProjectId() {
		return platformsByProjectId;
	}

	public void setPlatformsByProjectId(Collection<PlatformsEntity> platformsByProjectId) {
		this.platformsByProjectId = platformsByProjectId;
	}
}
