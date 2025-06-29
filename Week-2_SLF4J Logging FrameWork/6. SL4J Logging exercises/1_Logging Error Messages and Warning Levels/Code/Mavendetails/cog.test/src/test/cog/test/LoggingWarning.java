package Test.cog.test;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingWarning {
	private static final Logger logger = LoggerFactory.getLogger(LoggingWarning.class);
	 public static void main(String[] args) {
		 String uname=null;
		 logger.info("Test Example Starting");
		 if(uname==null) {
	 logger.warn("This is a warning message, null value received");
	 logger.error("This is an error message, cannot proceed with null value");
	 } logger.info("Exapmle ended");
	}

}
