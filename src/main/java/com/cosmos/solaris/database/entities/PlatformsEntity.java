package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "platforms", schema = "Solaris")
public class PlatformsEntity implements DatabaseEntity {
	public PlatformsEntity() {
	}

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "platform_id", nullable = false)
	private int platformId;
	@Basic
	@Column(name = "name", nullable = true, length = 255)
	private String name;
	@Basic
	@Column(name = "project_id", nullable = true, insertable=false, updatable=false)
	@JsonIgnore
	private int projectId;
	@Basic
	@Column(name = "ip_address", nullable = true, length = 255)
	private String ipAddress;
	@Basic
	@Column(name = "owner", nullable = true, length = -1)
	private String owner;
	@Basic
	@Column(name = "taken_by", nullable = true, length = 255)
	private String takenBy;
	@Basic
	@Column(name = "state", nullable = false)
	private int state;
	@Basic
	@Column(name = "description", nullable = true, length = -1)
	private String description;
	@Basic
	@Column(name = "controller_id", nullable = true, insertable=false, updatable=false)
	@JsonIgnore
	private int controllerId;
	@Basic
	@Column(name = "mac_address", nullable = true, length = 255)
	private String macAddress;
	@Basic
	@Column(name = "kvm_ip", nullable = true, length = 255)
	private String kvmIp;
	@Basic
	@Column(name = "wps_id", nullable = true, insertable=false, updatable=false)
	@JsonIgnore
	private int wpsId;
	@Basic
	@Column(name = "outlet", nullable = false)
	private int outlet;
	@Basic
	@Column(name = "bmc_address", nullable = true, length = 255)
	private String bmcAddress;
	@Basic
	@Column(name = "os_id", nullable = true, insertable=false, updatable=false)
	@JsonIgnore
	private int osId;
	@Basic
	@Column(name = "location", nullable = true, length = 255)
	private String location;
	@Basic
	@Column(name = "motherboard_model_id", nullable = true, insertable=false, updatable=false)
	@JsonIgnore
	private int motherboardModelId;
	@Basic
	@Column(name = "motherboard_serial_number", nullable = true, length = 255)
	private String motherboardSerialNumber;
	@ManyToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name = "project_id", referencedColumnName = "project_id")
	@JsonBackReference(value = "projects")
	@JsonUnwrapped
	private ProjectsEntity projectsByProjectId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "controller_id", referencedColumnName = "controller_id")
	@JsonBackReference(value = "controllers")
	@JsonProperty("controller")
	private ControllersEntity controllersByControllerId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "wps_id", referencedColumnName = "wps_id")
	@JsonBackReference(value = "wps")
	@JsonUnwrapped
	private PowerSwitchesEntity powerSwitchesByWpsId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "os_id", referencedColumnName = "os_id")
	@JsonBackReference(value = "os")
	@JsonUnwrapped
	private OperatingSystemsEntity operatingSystemsByOsId;
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name = "motherboard_model_id", referencedColumnName = "motherboard_model_id")
	@JsonBackReference(value = "mobo")
	@JsonUnwrapped
	private MotherboardsEntity motherboardsByMotherboardModelId;
	@OneToMany(mappedBy = "platformByPlatformId", cascade=CascadeType.ALL)
	@JsonManagedReference(value = "eqplatform")
	@JsonProperty("equipment")
	private Collection<EqLinksEntity> eqLinksByPlatformId;

	public int getPlatformId() {
		return platformId;
	}

	public void setPlatformId(int platformId) {
		this.platformId = platformId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
	}

	public String getTakenBy() {
		return takenBy;
	}

	public void setTakenBy(String takenBy) {
		this.takenBy = takenBy;
	}

	public int getState() {
		return state;
	}

	public void setState(int state) {
		this.state = state;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getControllerId() {
		return controllerId;
	}

	public void setControllerId(int controllerId) {
		this.controllerId = controllerId;
	}

	public String getMacAddress() {
		return macAddress;
	}

	public void setMacAddress(String macAddress) {
		this.macAddress = macAddress;
	}

	public String getKvmIp() {
		return kvmIp;
	}

	public void setKvmIp(String kvmIp) {
		this.kvmIp = kvmIp;
	}

	public int getWpsId() {
		return wpsId;
	}

	public void setWpsId(int wpsId) {
		this.wpsId = wpsId;
	}

	public int getOutlet() {
		return outlet;
	}

	public void setOutlet(int outlet) {
		this.outlet = outlet;
	}

	public String getBmcAddress() {
		return bmcAddress;
	}

	public void setBmcAddress(String bmcAddress) {
		this.bmcAddress = bmcAddress;
	}

	public int getOsId() {
		return osId;
	}

	public void setOsId(int osId) {
		this.osId = osId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getMotherboardModelId() {
		return motherboardModelId;
	}

	public void setMotherboardModelId(int motherboardModelId) {
		this.motherboardModelId = motherboardModelId;
	}

	public String getMotherboardSerialNumber() {
		return motherboardSerialNumber;
	}

	public void setMotherboardSerialNumber(String motherboardSerialNumber) {
		this.motherboardSerialNumber = motherboardSerialNumber;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		PlatformsEntity platformsEntity = (PlatformsEntity) o;
		return platformId == platformsEntity.platformId && projectId == platformsEntity.projectId && state == platformsEntity.state && controllerId == platformsEntity.controllerId && wpsId == platformsEntity.wpsId && outlet == platformsEntity.outlet && osId == platformsEntity.osId && motherboardModelId == platformsEntity.motherboardModelId && Objects.equals(name, platformsEntity.name) && Objects.equals(ipAddress, platformsEntity.ipAddress) && Objects.equals(owner, platformsEntity.owner) && Objects.equals(takenBy, platformsEntity.takenBy) && Objects.equals(description, platformsEntity.description) && Objects.equals(macAddress, platformsEntity.macAddress) && Objects.equals(kvmIp, platformsEntity.kvmIp) && Objects.equals(bmcAddress, platformsEntity.bmcAddress) && Objects.equals(location, platformsEntity.location) && Objects.equals(motherboardSerialNumber, platformsEntity.motherboardSerialNumber);
	}

	@Override
	public int hashCode() {
		return Objects.hash(platformId, name, projectId, ipAddress, owner, takenBy, state, description, controllerId, macAddress, kvmIp, wpsId, outlet, bmcAddress, osId, location, motherboardModelId, motherboardSerialNumber);
	}

	public ProjectsEntity getProjectsByProjectId() {
		return projectsByProjectId;
	}

	public void setProjectsByProjectId(ProjectsEntity projectsByProjectId) {
		this.projectsByProjectId = projectsByProjectId;
	}

	public ControllersEntity getControllersByControllerId() {
		return controllersByControllerId;
	}

	public void setControllersByControllerId(ControllersEntity controllersByControllerId) {
		this.controllersByControllerId = controllersByControllerId;
	}

	public PowerSwitchesEntity getPowerSwitchesByWpsId() {
		return powerSwitchesByWpsId;
	}

	public void setPowerSwitchesByWpsId(PowerSwitchesEntity powerSwitchesByWpsId) {
		this.powerSwitchesByWpsId = powerSwitchesByWpsId;
	}

	public OperatingSystemsEntity getOperatingSystemsByOsId() {
		return operatingSystemsByOsId;
	}

	public void setOperatingSystemsByOsId(OperatingSystemsEntity operatingSystemsByOsId) {
		this.operatingSystemsByOsId = operatingSystemsByOsId;
	}

	public MotherboardsEntity getMotherboardsByMotherboardModelId() {
		return motherboardsByMotherboardModelId;
	}

	public void setMotherboardsByMotherboardModelId(MotherboardsEntity motherboardsByMotherboardModelId) {
		this.motherboardsByMotherboardModelId = motherboardsByMotherboardModelId;
	}

	public Collection<EqLinksEntity> getEqLinksByPlatformId() {
		return eqLinksByPlatformId;
	}

	public void setEqLinksByPlatformId(Collection<EqLinksEntity> eqLinksByPlatformId) {
		this.eqLinksByPlatformId = eqLinksByPlatformId;
	}
}
