package com.sapient.poc.rest;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import org.apache.log4j.Logger;

import com.sapient.poc.rest.dto.LoginRequest;

@Path("/users")
public class UserResource {

	private static final Logger logger = Logger.getLogger(UserResource.class);
	
	@Context
	UriInfo uriInfo;
	
	public UserResource() {
		logger.warn("Instantiated");
	}

	@Path("ping")
	@GET
	@Consumes({MediaType.APPLICATION_JSON})
	@Produces(MediaType.APPLICATION_JSON)
	public String ping() {
		return "OK";
	}
	
	@POST
    @Path("login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
	public Response login(LoginRequest request, @Context HttpServletRequest req){
		if("admin".equalsIgnoreCase(request.getUsername())){
			Map<String, String> map=new HashMap<String, String>();
			map.put("sessionId", req.getSession().getId());
			return Response.ok(map).build();
		}else{
			WebApplicationException webApplicationException = new WebApplicationException(
					Response.Status.UNAUTHORIZED);
			logger.warn(webApplicationException);
			throw webApplicationException;
		}
	}
}
