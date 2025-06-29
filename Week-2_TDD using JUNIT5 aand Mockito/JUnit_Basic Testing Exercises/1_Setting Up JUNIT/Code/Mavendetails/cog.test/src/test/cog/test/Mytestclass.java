package Test.cog.test;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
public class Mytestclass {
	@Test
public void sum() {
		  int result = 2 + 3;
	        assertEquals(5, result);	
}
@Test
public void sub() {
	int result = 3-1;
	assertNotEquals(5, result);
}

}
