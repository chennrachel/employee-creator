package io.nology.employeecreator.employees;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Employee {

    public Employee() {};

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private long id;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    @Column
    String firstName;
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column
    String middleName;
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    @Column
    String lastName;
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column
    String email;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Column
    String mobile;
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @Column
    String address;
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    @Column
    String contractType;
    public String getContractType() {
        return contractType;
    }
    public void setContractType(String contractType) {
        this.contractType = contractType;
    }
    
    @Column
    Date startDate;
    public Date getStartDate() {
        return startDate;
    }
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    @Column
    Date finishDate;
    public Date getFinishDate() {
        return finishDate;
    }
    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    @Column
    Boolean isOngoing;
    public Boolean getIsOngoing() {
        return isOngoing;
    }
    public void setIsOngoing(Boolean isOngoing) {
        this.isOngoing = isOngoing;
    }

    @Column
    String workType;
    public String getWorkType() {
        return workType;
    }
    public void setWorkType(String workType) {
        this.workType = workType;
    }

    @Column
    Integer weeklyHours;
    public Integer getWeeklyHours() {
        return weeklyHours;
    }
    public void setWeeklyHours(Integer weeklyHours) {
        this.weeklyHours = weeklyHours;
    }

    public Employee(String firstName, String middleName, String lastName, String email, String mobile, String address, String contractType, Date startDate, Date finishDate, String workType, Integer weeklyHours, boolean isOngoing) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.contractType = contractType;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.workType = workType;
        this.weeklyHours = weeklyHours;   
        this.isOngoing = isOngoing;
    }
}
