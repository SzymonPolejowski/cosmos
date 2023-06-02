package com.cosmos.solaris.database.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "operating_systems", schema = "Solaris")
public class OperatingSystemsEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "os_id", nullable = false)
	private int osId;
	@Basic
	@Column(name = "name", nullable = true, length = -1)
	private String name;
	@OneToMany(mappedBy = "operatingSystemsByOsId")
	private Collection<DutEntity> dutsByOsId;

	public int getOsId() {
		return osId;
	}

	public void setOsId(int osId) {
		this.osId = osId;
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
		OperatingSystemsEntity that = (OperatingSystemsEntity) o;
		return osId == that.osId && Objects.equals(name, that.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(osId, name);
	}

	public Collection<DutEntity> getDutsByOsId() {
		return dutsByOsId;
	}

	public void setDutsByOsId(Collection<DutEntity> dutsByOsId) {
		this.dutsByOsId = dutsByOsId;
	}
}
