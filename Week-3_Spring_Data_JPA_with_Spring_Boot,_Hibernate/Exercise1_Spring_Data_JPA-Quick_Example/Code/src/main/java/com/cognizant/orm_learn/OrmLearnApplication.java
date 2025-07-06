package com.cognizant.orm_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.cognizant.orm_learn.service.CountryService;
import com.cognizant.orm_learn.model.Country;
import org.springframework.context.ApplicationContext;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class OrmLearnApplication {
	
	 private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
	    private static CountryService countryService;
	public static void main(String[] args) {
		 ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
	        countryService = context.getBean(CountryService.class);
	        testGetAllCountries();
	}
	 private static void testGetAllCountries() {
	        LOGGER.info("Start");
	        List<Country> countries = countryService.getAllCountries();
	        LOGGER.debug("countries={}", countries);
	        LOGGER.info("End");
	    }

}


