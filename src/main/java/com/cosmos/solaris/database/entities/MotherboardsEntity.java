package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "motherboards", schema = "Solaris")
public class MotherboardsEntity implements DatabaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "motherboard_model_id", nullable = false)
	@JsonIgnore
	private int motherboardModelId;
	@Basic
	@Column(name = "model", nullable = true, length = -1)
	@JsonProperty("motherboardModel")
	private String model;
	@OneToMany(mappedBy = "motherboardsByMotherboardModelId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "mobo")
	private Collection<DutEntity> dutsByMotherboardModelId;

	public int getMotherboardModelId() {
		return motherboardModelId;
	}

	public void setMotherboardModelId(int motherboardModelId) {
		this.motherboardModelId = motherboardModelId;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public MotherboardsEntity() {
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		MotherboardsEntity that = (MotherboardsEntity) o;
		return Objects.equals(model, that.model);
	}

	@Override
	public int hashCode() {
		return Objects.hash(motherboardModelId, model);
	}

	public Collection<DutEntity> getDutsByMotherboardModelId() {
		return dutsByMotherboardModelId;
	}

	public void setDutsByMotherboardModelId(Collection<DutEntity> dutsByMotherboardModelId) {
		this.dutsByMotherboardModelId = dutsByMotherboardModelId;
	}
}
