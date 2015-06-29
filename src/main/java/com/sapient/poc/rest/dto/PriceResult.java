package com.sapient.poc.rest.dto;


public class PriceResult {
	private int tradeId;
	private String date;
	private String peName;
	private MeasureResult[] measures;
	/**
	 * @return the tradeId
	 */
	public int getTradeId() {
		return tradeId;
	}
	/**
	 * @param tradeId the tradeId to set
	 */
	public void setTradeId(int tradeId) {
		this.tradeId = tradeId;
	}
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
	public MeasureResult[] getMeasures() {
		return measures;
	}
	/**
	 * @param measures the measures to set
	 */
	public void setMeasures(MeasureResult[] measures) {
		this.measures = measures;
	}

	
	
}
