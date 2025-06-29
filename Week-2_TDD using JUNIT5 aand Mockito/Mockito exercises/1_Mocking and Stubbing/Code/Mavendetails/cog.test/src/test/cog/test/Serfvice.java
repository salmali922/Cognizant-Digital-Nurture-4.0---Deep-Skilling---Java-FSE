package Test.cog.test;

class MService {
	 private EXAPI externalApi;

	 public MService(EXAPI externalApi) {
	     this.externalApi = externalApi;
	 }

	 public String fetchData() {
	     return externalApi.getData();
	 }
	}
