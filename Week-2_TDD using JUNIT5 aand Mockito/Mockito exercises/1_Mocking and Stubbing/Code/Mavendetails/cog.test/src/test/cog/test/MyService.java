package Test.cog.test;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito; 



public class MyService {
	@Test
    public void testExternalApi() {
        // Step 1: Create a mock object for the external API
        EXAPI mockApi = Mockito.mock(EXAPI.class);

        // Step 2: Stub the method to return a predefined value
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Inject mock into the service
        MService service = new MService(mockApi);

        // Call the method and assert
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
