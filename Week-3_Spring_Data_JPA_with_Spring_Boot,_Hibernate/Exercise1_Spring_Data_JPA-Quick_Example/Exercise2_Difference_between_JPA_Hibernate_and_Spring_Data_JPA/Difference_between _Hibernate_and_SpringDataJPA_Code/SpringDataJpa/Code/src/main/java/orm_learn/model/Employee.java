package com.cognizant.orm_learn.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class Employee {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    public Integer id;

	    public String name;
	    public String department;
	    public Double salary;
	    public Employee() {}
	    public Employee(String name, String department, double salary) {
	        this.name = name;
	        this.department = department;
	        this.salary = salary;}
}
