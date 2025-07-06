package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Employee;
import com.cognizant.orm_learn.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.transaction.Transactional;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repo;

    @Transactional
    public void addEmployee(Employee employee) {
        repo.save(employee);
    }
}
