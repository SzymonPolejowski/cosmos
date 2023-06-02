package com.cosmos.solaris.database.entities;

import jakarta.persistence.*;

import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "dut", schema = "Solaris")
public class DutEntity {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	@Column(name = "dut_id", nullable = false)
	private int dutId;
	@Basic
	@Column(name = "name", nullable = true, length = 255)
	private String name;
	@Basic
	@Column(name = "project_id", nullable = true)
	private Integer projectId;
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
	@Column(name = "controller_id", nullable = true)
	private Integer controllerId;
	@Basic
	@Column(name = "mac_adress", nullable = true, length = 255)
	private String macAdress;
	@Basic
	@Column(name = "kvm_ip", nullable = true, length = 255)
	private String kvmIp;
	@Basic
	@Column(name = "wps_id", nullable = true)
	private Integer wpsId;
	@Basic
	@Column(name = "outlet", nullable = false)
	private int outlet;
	@Basic
	@Column(name = "bmc_adress", nullable = true, length = 255)
	private String bmcAdress;
	@Basic
	@Column(name = "os_id", nullable = true)
	private Integer osId;
	@Basic
	@Column(name = "location", nullable = true, length = 255)
	private String location;
	@Basic
	@Column(name = "motherboard_model_id", nullable = true)
	private Integer motherboardModelId;
	@Basic
	@Column(name = "motherboard_serial_number", nullable = true, length = 255)
	private String motherboardSerialNumber;
	@ManyToOne
	@JoinColumn(name = "project_id", referencedColumnName = "project_id")
	private ProjectsEntity projectsByProjectId;
	@ManyToOne
	@JoinColumn(name = "controller_id", referencedColumnName = "controller_id")
	private ControllersEntity controllersByControllerId;
	@ManyToOne
	@JoinColumn(name = "wps_id", referencedColumnName = "wps_id")
	private PowerSwitchesEntity powerSwitchesByWpsId;
	@ManyToOne
	@JoinColumn(name = "os_id", referencedColumnName = "os_id")
	private OperatingSystemsEntity operatingSystemsByOsId;
	@ManyToOne
	@JoinColumn(name = "motherboard_model_id", referencedColumnName = "motherboard_model_id")
	private MotherboardsEntity motherboardsByMotherboardModelId;
	@OneToMany(mappedBy = "dutByDutId")
	private Collection<EqLinksEntity> eqLinksByDutId;

	public int getDutId() {
		return dutId;
	}

	public void setDutId(int dutId) {
		this.dutId = dutId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
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

	public Integer getControllerId() {
		return controllerId;
	}

	public void setControllerId(Integer controllerId) {
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

	public Integer getWpsId() {
		return wpsId;
	}

	public void setWpsId(Integer wpsId) {
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

	public Integer getOsId() {
		return osId;
	}

	public void setOsId(Integer osId) {
		this.osId = osId;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getMotherboardModelId() {
		return motherboardModelId;
	}

	public void setMotherboardModelId(Integer motherboardModelId) {
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
		DutEntity dutEntity = (DutEntity) o;
		return dutId == dutEntity.dutId && state == dutEntity.state && outlet == dutEntity.outlet && Objects.equals(name, dutEntity.name) && Objects.equals(projectId, dutEntity.projectId) && Objects.equals(ipAdress, dutEntity.ipAdress) && Objects.equals(owner, dutEntity.owner) && Objects.equals(takenBy, dutEntity.takenBy) && Objects.equals(description, dutEntity.description) && Objects.equals(controllerId, dutEntity.controllerId) && Objects.equals(macAdress, dutEntity.macAdress) && Objects.equals(kvmIp, dutEntity.kvmIp) && Objects.equals(wpsId, dutEntity.wpsId) && Objects.equals(bmcAdress, dutEntity.bmcAdress) && Objects.equals(osId, dutEntity.osId) && Objects.equals(location, dutEntity.location) && Objects.equals(motherboardModelId, dutEntity.motherboardModelId) && Objects.equals(motherboardSerialNumber, dutEntity.motherboardSerialNumber);
	}

	@Override
	public int hashCode() {
		return Objects.hash(dutId, name, projectId, ipAdress, owner, takenBy, state, description, controllerId, macAdress, kvmIp, wpsId, outlet, bmcAdress, osId, location, motherboardModelId, motherboardSerialNumber);
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
