package Test.cog.test;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertNotNull;
public class MyAssertionsTest {
		 @Test
		 public void testAssertions() {
		 // Assert equals
		 assertEquals(5, 2 + 3);
		 // Assert true
		 assertTrue(5 > 3);
		 // Assert false
		 assertFalse(5 < 3);
		 // Assert null
		 assertNull(null);
		 // Assert not null
		 assertNotNull(new Object());
		 }
		} 

