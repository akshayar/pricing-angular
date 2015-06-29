package com.sapient.poc;

import org.apache.log4j.Logger;
import org.glassfish.jersey.jackson.JacksonFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.glassfish.jersey.server.spring.scope.RequestContextFilter;

public class MyApplication extends ResourceConfig {
	private static final Logger logger=Logger.getLogger(MyApplication.class);
	
	public MyApplication() {
		logger.warn("Initialzing");
		register(RequestContextFilter.class);
		packages(new String[]{"com.sapient.poc.rest"});
		register(JacksonFeature.class);
	}

}
