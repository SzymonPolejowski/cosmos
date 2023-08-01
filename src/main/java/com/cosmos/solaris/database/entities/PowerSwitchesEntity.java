package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "power_switches", schema = "Solaris")
public class PowerSwitchesEntity implements DatabaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "wps_id", nullable = false)
	@JsonIgnore
	private int wpsId;
	@Basic
	@Column(name = "ip_adress", nullable = true, length = 255)
	@JsonProperty("wpsIp")
	private String ipAdress;
	@OneToMany(mappedBy = "powerSwitchesByWpsId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "wps")
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

	public PowerSwitchesEntity() {
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		PowerSwitchesEntity that = (PowerSwitchesEntity) o;
		return Objects.equals(ipAdress, that.ipAdress);
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
