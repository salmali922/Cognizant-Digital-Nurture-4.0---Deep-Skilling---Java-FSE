package Test.cog.test;

import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
public class MyServiceTest {
	 @Test
	 public void testVerifyInteraction() {
	 EXAPI mockApi = Mockito.mock(EXAPI.class);
	 MService service = new MService(mockApi);
	 service.fetchData();
	 verify(mockApi).getData();
	 }
	} 

