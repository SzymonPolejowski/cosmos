package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "power_switches", schema = "Solaris")
public class PowerSwitchesEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "wps_id", nullable = false)
	private int wpsId;
	@Basic
	@Column(name = "ip_adress", nullable = true, length = 255)
	private String ipAdress;
	@OneToMany(mappedBy = "powerSwitchesByWpsId")
	@JsonBackReference
	private Collection<DutEntity> dutsByWpsId;

	public int getWpsId() {
		return wpsId;
	}

	public void setWpsId(int wpsId) {
		this.wpsId = wpsId;
	}

	public String getIpAdress() {
		return ipAdress;
	}

	public void setIpAdress(String ipAdress) {
		this.ipAdress = ipAdress;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		PowerSwitchesEntity that = (PowerSwitchesEntity) o;
		return wpsId == that.wpsId && Objects.equals(ipAdress, that.ipAdress);
	}

	@Override
	public int hashCode() {
		return Objects.hash(wpsId, ipAdress);
	}

	public Collection<DutEntity> getDutsByWpsId() {
		return dutsByWpsId;
	}

	public void setDutsByWpsId(Collection<DutEntity> dutsByWpsId) {
		this.dutsByWpsId = dutsByWpsId;
	}
}
