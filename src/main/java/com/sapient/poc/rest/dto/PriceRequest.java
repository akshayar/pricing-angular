package com.sapient.poc.rest.dto;

import org.apache.commons.lang.builder.ToStringBuilder;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown=true)
public class PriceRequest {
	private String date;
	private String peName;
	private String measures;
	/**
	 * @return the date
	 */
	public String getDate() {
		return date;
	}
	/**
	 * @param date the date to set
	 */
	public void setDate(String date) {
		this.date = date;
	}
	/**
	 * @return the peName
	 */
	public String getPeName() {
		return peName;
	}
	/**
	 * @param peName the peName to set
	 */
	public void setPeName(String peName) {
		this.peName = peName;
	}
	/**
	 * @return the measures
	 */
	public String getMeasures() {
		return measures;
	}
	/**
	 * @param measures the measures to set
	 */
	public void setMeasures(String measures) {
		this.measures = measures;
	}
	

	@Override
	public String toString() {
		return ToStringBuilder.reflectionToString(this);
	}
	
	
}
