package io.nology.employeecreator.employees;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService service;
    
    @PostMapping
    public ResponseEntity<Employee> create(@Valid @RequestBody EmployeeDTO data) {
        Employee createdEmployee = this.service.create(data);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        List<Employee> employees = this.service.getAllEmployees();
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable long id) {
        Optional<Employee> employee = this.service.getEmployeeById(id);
        return new ResponseEntity<Employee> (employee.get(), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteById(@PathVariable long id) {
        Employee employee = this.service.deleteEmployeeById(id);
        return new ResponseEntity<Employee> (employee, HttpStatus.OK);
    }
}
