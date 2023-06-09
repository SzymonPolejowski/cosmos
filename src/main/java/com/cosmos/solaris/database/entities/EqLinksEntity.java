package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "eq_links", schema = "Solaris")
public class EqLinksEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "ID", nullable = false)
	private int id;
	@Basic
	@Column(name = "dut_id", nullable = false, insertable=false, updatable=false)
	private int dutId;
	@Basic
	@Column(name = "eq_id", nullable = false, insertable=false, updatable=false)
	private int eqId;
	@ManyToOne
	@JoinColumn(name = "dut_id", referencedColumnName = "dut_id", nullable = false)
	@JsonBackReference
	private DutEntity dutByDutId;
	@ManyToOne
	@JoinColumn(name = "eq_id", referencedColumnName = "eq_id", nullable = false)
	@JsonManagedReference
	private EqTypeEntity eqTypeByEqId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getDutId() {
		return dutId;
	}

	public void setDutId(int dutId) {
		this.dutId = dutId;
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
		return id == that.id && dutId == that.dutId && eqId == that.eqId;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id, dutId, eqId);
	}

	public DutEntity getDutByDutId() {
		return dutByDutId;
	}

	public void setDutByDutId(DutEntity dutByDutId) {
		this.dutByDutId = dutByDutId;
	}

	public EqTypeEntity getEqTypeByEqId() {
		return eqTypeByEqId;
	}

	public void setEqTypeByEqId(EqTypeEntity eqTypeByEqId) {
		this.eqTypeByEqId = eqTypeByEqId;
	}
}
