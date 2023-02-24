package io.nology.employeecreator.employees;

import java.sql.Date;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class EmployeeDTO {
    @NotBlank
    String firstName;
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    String middleName;
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    @NotBlank
    String lastName;
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @NotNull
    String email;
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @NotNull
    String mobile;
    public String getMobile() {
        return mobile;
    }
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    @NotBlank
    String address;
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }

    String contractType;
    public String getContractType() {
        return contractType;
    }
    public void setContractType(String contractType) {
        this.contractType = contractType;
    }
    
    Date startDate;
    public Date getStartDate() {
        return startDate;
    }
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    Date finishDate;
    public Date getFinishDate() {
        return finishDate;
    }
    public void setFinishDate(Date finishDate) {
        this.finishDate = finishDate;
    }

    Boolean isOngoing;
    public Boolean getIsOngoing() {
        return isOngoing;
    }
    public void setIsOngoing(Boolean isOngoing) {
        this.isOngoing = isOngoing;
    }

    String workType;
    public String getWorkType() {
        return workType;
    }
    public void setWorkType(String workType) {
        this.workType = workType;
    }

    Integer weeklyHours;
    public Integer getWeeklyHours() {
        return weeklyHours;
    }
    public void setWeeklyHours(Integer weeklyHours) {
        this.weeklyHours = weeklyHours;
    }

    public EmployeeDTO(String firstName, String middleName, String lastName, String email, String mobile,String address, String contractType, Date startDate, Date finishDate, Boolean isOngoing, String workType, Integer weeklyHours) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.address = address;
        this.contractType = contractType;
        this.startDate = startDate;
        this.finishDate = finishDate;
        this.isOngoing = isOngoing;
        this.workType = workType;
        this.weeklyHours = weeklyHours;
    }

}
