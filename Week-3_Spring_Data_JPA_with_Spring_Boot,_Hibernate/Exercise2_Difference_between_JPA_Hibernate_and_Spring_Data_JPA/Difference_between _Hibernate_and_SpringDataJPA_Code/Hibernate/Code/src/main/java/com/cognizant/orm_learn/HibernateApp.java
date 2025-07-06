package com.cognizant.orm_learn;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.cognizant.orm_learn.Employee;

public class HibernateApp {
	    private static SessionFactory factory;

	    public static void main(String[] args) {
	        try {
	            factory = new Configuration().configure().buildSessionFactory();
	        } catch (Throwable ex) {
	            throw new ExceptionInInitializerError(ex);
	        }

	        Employee employee = new Employee();
	        employee.setName("John");
	        employee.setSalary(50000);

	        Integer empId = new HibernateApp().addEmployee(employee);
	        System.out.println("Added employee with ID: " + empId);
	    }

	    public Integer addEmployee(Employee employee) {
	        Session session = factory.openSession();
	        Transaction tx = null;
	        Integer employeeID = null;

	        try {
	            tx = session.beginTransaction();
	            employeeID = (Integer) session.save(employee);
	            tx.commit();
	        } catch (HibernateException e) {
	            if (tx != null) tx.rollback();
	            e.printStackTrace();
	        } finally {
	            session.close();
	        }
	        return employeeID;
	    }
	}

