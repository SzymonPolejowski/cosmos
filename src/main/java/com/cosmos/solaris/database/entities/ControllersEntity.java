package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "controllers", schema = "Solaris")
public class ControllersEntity implements DBEntity{
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "controller_id", nullable = false)
	@JsonIgnore
	private int controllerId;
	@Basic
	@Column(name = "serial_number", nullable = true, length = 255)
	private String serialNumber;
	@Basic
	@Column(name = "ip_adress", nullable = true, length = 255)
	private String ipAdress;
	@Basic
	@Column(name = "mac_adress", nullable = true, length = 255)
	private String macAdress;
	@Basic
	@Column(name = "description", nullable = true, length = -1)
	private String description;
	@OneToMany(mappedBy = "controllersByControllerId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "controllers")
	private Collection<DutEntity> dutsByControllerId;

	public ControllersEntity() {
	}

	public int getControllerId() {
		return controllerId;
	}

	public void setControllerId(int controllerId) {
		this.controllerId = controllerId;
	}

	public String getSerialNumber() {
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) {
		this.serialNumber = serialNumber;
	}

	public String getIpAdress() {
		return ipAdress;
	}

	public void setIpAdress(String ipAdress) {
		this.ipAdress = ipAdress;
	}

	public String getMacAdress() {
		return macAdress;
	}

	public void setMacAdress(String macAdress) {
		this.macAdress = macAdress;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ControllersEntity that = (ControllersEntity) o;
		return controllerId == that.controllerId && Objects.equals(serialNumber, that.serialNumber) && Objects.equals(ipAdress, that.ipAdress) && Objects.equals(macAdress, that.macAdress) && Objects.equals(description, that.description);
	}

	@Override
	public int hashCode() {
		return Objects.hash(controllerId, serialNumber, ipAdress, macAdress, description);
	}

	public Collection<DutEntity> getDutsByControllerId() {
		return dutsByControllerId;
	}

	public void setDutsByControllerId(Collection<DutEntity> dutsByControllerId) {
		this.dutsByControllerId = dutsByControllerId;
	}
}
