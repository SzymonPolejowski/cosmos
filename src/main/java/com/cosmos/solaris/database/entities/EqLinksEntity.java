package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "eq_links", schema = "Solaris")
public class EqLinksEntity implements DatabaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "ID", nullable = false)
	@JsonIgnore
	private int id;
	@Basic
	@Column(name = "platform_id", nullable = false, insertable=false, updatable=false)
	@JsonIgnore
	private int platformId;
	@Basic
	@Column(name = "eq_id", nullable = false, insertable=false, updatable=false)
	@JsonIgnore
	private int eqId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "platform_id", referencedColumnName = "platform_id", nullable = true)
	@JsonBackReference(value = "eqPlatform")
	private PlatformEntity platformByPlatformId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "eq_id", referencedColumnName = "eq_id", nullable = true)
	@JsonBackReference(value = "eqid")
	private EqTypeEntity eqTypeByEqId;

	public EqLinksEntity() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPlatformId() {
		return platformId;
	}

	public void setPlatformId(int dutId) {
		this.platformId = dutId;
	}

	public int getEqId() {
		return eqId;
	}

	public void setEqId(int eqId) {
		this.eqId = eqId;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		EqLinksEntity that = (EqLinksEntity) o;
		return id == that.id && platformId == that.platformId && eqId == that.eqId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, platformId, eqId);
	}

	public PlatformEntity getPlatformByPlatformId() {
		return platformByPlatformId;
	}

	public void setPlatformByPlatformId(PlatformEntity dutByDutId) {
		this.platformByPlatformId = dutByDutId;
	}

	public EqTypeEntity getEqTypeByEqId() {
		return eqTypeByEqId;
	}

	public void setEqTypeByEqId(EqTypeEntity eqTypeByEqId) {
		this.eqTypeByEqId = eqTypeByEqId;
	}
}
