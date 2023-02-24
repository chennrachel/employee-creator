package io.nology.employeecreator.employees;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee create(EmployeeDTO data) {
        Employee createdEmployee = new Employee(data.getFirstName(), data.getMiddleName(), data.getLastName(), data.getEmail(), data.getMobile(), data.getAddress(), data.getContractType(), data.getStartDate(), data.getFinishDate(), data.getWorkType(), data.getWeeklyHours(), data.getIsOngoing());
        
        this.repository.save(createdEmployee);
        
        return createdEmployee;
    }

    public List<Employee> getAllEmployees() {
        return this.repository.findAll();
    }

    public Optional<Employee> getEmployeeById(long id) {
        return this.repository.findById(id);
    }

    public Employee deleteEmployeeById(long id) {
        Optional<Employee> employeeExistsOptional = getEmployeeById(id);
        if (employeeExistsOptional.isPresent()) {
            this.repository.delete(employeeExistsOptional.get());
            return employeeExistsOptional.get();
        }        
        return null;
    }
}
