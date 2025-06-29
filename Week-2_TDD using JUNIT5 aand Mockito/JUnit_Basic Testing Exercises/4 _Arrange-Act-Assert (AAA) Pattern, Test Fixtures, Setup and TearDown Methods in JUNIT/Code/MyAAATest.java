package Test.cog.test;
import static org.junit.jupiter.api.Assertions.assertNotEquals;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.Assert.assertEquals;

public class MyAAATest {

    static Calculator calculator;
    

    // Setup method (runs before each test)
    @BeforeAll
    public static void setUp() {
    	 // Arrange
        calculator = new Calculator();
        System.out.println("Setting up test...");
    }

    // Tear down method (runs after each test)
    @AfterAll
    public static void tearDown() {
        calculator = null;
        System.out.println("Cleaning up test...");
    }
   

    @Test
    public void Add() {
    	
    	
        // Act
        int result = calculator.add(2, 3);
        System.out.println("The add up result is correct");
        
        // Assert
        assertEquals(5, result);
    }

    @Test
    public void Multiply() {
        // Act
        int result = calculator.multiply(4, 5);
        
        System.out.println("The multiplication is incorrect");
        // Assert
        assertNotEquals(35, result);
    }
}
