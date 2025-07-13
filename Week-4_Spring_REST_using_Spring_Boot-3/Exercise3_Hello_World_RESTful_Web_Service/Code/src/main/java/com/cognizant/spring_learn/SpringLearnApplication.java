package com.cognizant.spring_learn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication // ✅ Let Spring Boot load XML config
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("START");

        ApplicationContext context = SpringApplication.run(SpringLearnApplication.class, args);
        displayCountry();

        LOGGER.info("END");
    }
    @Autowired
    public static void displayCountry() {
        LOGGER.info("Inside displayCountry()");
        LOGGER.debug("Attempting to load bean...");
       
        Country country;


        ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
        country = context.getBean("country", Country.class);

        LOGGER.debug("Country loaded: {}", country.toString());
    }

}
