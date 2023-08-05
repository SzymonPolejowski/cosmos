package com.cosmos.solaris.database.entities;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "dut", schema = "Solaris")
public class PlatformEntity implements DatabaseEntity {
	public PlatformEntity() {
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
	@Column(name = "ip_adress", nullable = true, length = 255)
	private String ipAdress;
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
	@Column(name = "mac_adress", nullable = true, length = 255)
	private String macAdress;
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
	@Column(name = "bmc_adress", nullable = true, length = 255)
	private String bmcAdress;
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
	@JsonManagedReference(value = "eqdut")
	@JsonProperty("equipment")
	private Collection<EqLinksEntity> eqLinksByDutId;

	public int getPlatformId() {
		return platformId;
	}

	public void setPlatformId(int dutId) {
		this.platformId = dutId;
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

	public String getIpAdress() {
		return ipAdress;
	}

	public void setIpAdress(String ipAdress) {
		this.ipAdress = ipAdress;
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

	public String getMacAdress() {
		return macAdress;
	}

	public void setMacAdress(String macAdress) {
		this.macAdress = macAdress;
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

	public String getBmcAdress() {
		return bmcAdress;
	}

	public void setBmcAdress(String bmcAdress) {
		this.bmcAdress = bmcAdress;
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
		PlatformEntity platformEntity = (PlatformEntity) o;
		return platformId == platformEntity.platformId && projectId == platformEntity.projectId && state == platformEntity.state && controllerId == platformEntity.controllerId && wpsId == platformEntity.wpsId && outlet == platformEntity.outlet && osId == platformEntity.osId && motherboardModelId == platformEntity.motherboardModelId && Objects.equals(name, platformEntity.name) && Objects.equals(ipAdress, platformEntity.ipAdress) && Objects.equals(owner, platformEntity.owner) && Objects.equals(takenBy, platformEntity.takenBy) && Objects.equals(description, platformEntity.description) && Objects.equals(macAdress, platformEntity.macAdress) && Objects.equals(kvmIp, platformEntity.kvmIp) && Objects.equals(bmcAdress, platformEntity.bmcAdress) && Objects.equals(location, platformEntity.location) && Objects.equals(motherboardSerialNumber, platformEntity.motherboardSerialNumber);
	}

	@Override
	public int hashCode() {
		return Objects.hash(platformId, name, projectId, ipAdress, owner, takenBy, state, description, controllerId, macAdress, kvmIp, wpsId, outlet, bmcAdress, osId, location, motherboardModelId, motherboardSerialNumber);
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

	public Collection<EqLinksEntity> getEqLinksByDutId() {
		return eqLinksByDutId;
	}

	public void setEqLinksByDutId(Collection<EqLinksEntity> eqLinksByDutId) {
		this.eqLinksByDutId = eqLinksByDutId;
	}
}
