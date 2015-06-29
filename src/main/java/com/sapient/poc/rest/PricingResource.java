package com.sapient.poc.rest;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.log4j.Logger;

import com.sapient.poc.rest.dto.MeasureResult;
import com.sapient.poc.rest.dto.PriceRequest;
import com.sapient.poc.rest.dto.PriceResult;

@Path("/trades")
public class PricingResource {

	private static final Logger logger = Logger
			.getLogger(PricingResource.class);
	public PricingResource() {
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
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("price/{tradeId}")
	public PriceResult price(@PathParam("tradeId")
    int tradeId,PriceRequest priceRequest){
    	logger.info(priceRequest.toString());
		return createDummy(tradeId,priceRequest);
	}
	
	private PriceResult createDummy(int tradeId,PriceRequest priceRequest){
		
		PriceResult priceResult=new PriceResult();
		priceResult.setDate(priceRequest.getDate());
		priceResult.setPeName(priceRequest.getPeName());
		priceResult.setTradeId(tradeId);
		String[] measures=priceRequest.getMeasures().split(",");
		MeasureResult[] measureResults=new MeasureResult[measures.length];
		priceResult.setMeasures(measureResults);
		for(int i=0;i<measures.length;i++){
			MeasureResult result=new MeasureResult();
			result.setMeasure(measures[i]);
			result.setValue(10);
			measureResults[i]=result;
		}
		
		return priceResult;
	}
	
}
