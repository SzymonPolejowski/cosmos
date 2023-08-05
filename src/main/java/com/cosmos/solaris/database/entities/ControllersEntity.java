package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "controllers", schema = "Solaris")
public class ControllersEntity implements DatabaseEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "controller_id", nullable = false)
	@JsonIgnore
	private int controllerId;
	@Basic
	@Column(name = "serial_number", nullable = true, length = 255)
	private String serialNumber;
	@Basic
	@Column(name = "ip_address", nullable = true, length = 255)
	private String ipAddress;
	@Basic
	@Column(name = "mac_address", nullable = true, length = 255)
	private String macAddress;
	@Basic
	@Column(name = "description", nullable = true, length = -1)
	private String description;
	@OneToMany(mappedBy = "controllersByControllerId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "controllers")
	private Collection<PlatformsEntity> platformsByControllerId;

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

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getMacAddress() {
		return macAddress;
	}

	public void setMacAddress(String macAddress) {
		this.macAddress = macAddress;
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
		return controllerId == that.controllerId && Objects.equals(serialNumber, that.serialNumber) && Objects.equals(ipAddress, that.ipAddress) && Objects.equals(macAddress, that.macAddress) && Objects.equals(description, that.description);
	}

	@Override
	public int hashCode() {
		return Objects.hash(controllerId, serialNumber, ipAddress, macAddress, description);
	}

	public Collection<PlatformsEntity> getPlatformsByControllerId() {
		return platformsByControllerId;
	}

	public void setPlatformsByControllerId(Collection<PlatformsEntity> platformsByControllerId) {
		this.platformsByControllerId = platformsByControllerId;
	}
}
