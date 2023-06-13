package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "eq_type", schema = "Solaris")
public class EqTypeEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "eq_id", nullable = false)
	@JsonIgnore
	private int eqId;
	@Basic
	@Column(name = "name", nullable = false, length = -1)
	private String name;
	@OneToMany(mappedBy = "eqTypeByEqId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "eqid")
	private Collection<EqLinksEntity> eqLinksByEqId;

	public int getEqId() {
		return eqId;
	}

	public void setEqId(int eqId) {
		this.eqId = eqId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public EqTypeEntity() {
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		EqTypeEntity that = (EqTypeEntity) o;
		return eqId == that.eqId && Objects.equals(name, that.name);
	}

	@Override
	public int hashCode() {
		return Objects.hash(eqId, name);
	}

	public Collection<EqLinksEntity> getEqLinksByEqId() {
		return eqLinksByEqId;
	}

	public void setEqLinksByEqId(Collection<EqLinksEntity> eqLinksByEqId) {
		this.eqLinksByEqId = eqLinksByEqId;
	}
}
