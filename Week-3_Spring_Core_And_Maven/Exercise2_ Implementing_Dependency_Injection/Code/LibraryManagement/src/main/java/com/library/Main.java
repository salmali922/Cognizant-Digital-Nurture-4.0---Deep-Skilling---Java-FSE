package com.library;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class Main {
	 public static void main(String[] args) {
	        // Load Spring context
	        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

	        // Get BookService bean
	        BookService bookService = context.getBean("bookService", BookService.class);

	        // Use the service
	        bookService.addBook("The Alchemist");
	        bookService.addBook("The Wizard of Oz");
	        bookService.performService();
	    }
}
