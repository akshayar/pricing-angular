'use strict';

angular.module('myApp.price', ['ngRoute','ngCookies'])
.service('PriceService', function ($rootScope,$http,$location,$cookieStore) {
        var service = {};
 
        service.price = price;
       
        return service;
 
        function price(priceData, callback,errorCallBack) {
 
            console.log("PriceService-price="+angular.toJson(priceData, true));
			$http.post('rest/trades/price/'+priceData.tradeId, priceData)
            .success(function (response) {
			    console.log("PriceService Service-response="+angular.toJson(response));
				response.success=true;
                callback(response);
            })
			.error(function (response) {
			    console.log("PriceService Service-response="+angular.toJson(response));
                errorCallBack(response);
            });
			
        }
 })
.controller('priceCtrl', function($location,PriceService,AuthenticationService) {
    console.log("Price Controller-called");
	if(!AuthenticationService.IsAutenticated()){
			   $location.path('/login');
			   return;
	}
	var vm = this;
	if(!vm.priceData)vm.priceData={};
	if(!vm.priceResult) vm.priceResult={};
    vm.price = price;
	
    function price(){
	    console.log("Price Controller-price="+angular.toJson(vm.priceData, true));
		vm.dataLoading = true;
		var date= "";
		if(date.length == 0){
		  var temp=new Date();
		  date= (temp.getFullYear()+1)+"-"+temp.getMonth()+"-"+temp.getDate() ;/*+" "+temp.getHours()+":"+temp.getMinutes()+":"+temp.getSeconds() +" "+temp.getTimezoneOffset();*/
		}
		var local = new Date();
	    var tzo = -local.getTimezoneOffset()/60;
	    var sign = tzo >= 0 ? '+' : '-';
	    var norm = Math.abs(Math.floor(tzo));
	    var padStr= (norm < 10 ? '0' : '') + norm+'00';
	    var dateStr=date +" "  + sign + padStr;
		vm.priceData.valDate=date;
        PriceService.price(vm.priceData, function (responseSuccess) {
                vm.priceResult=responseSuccess;
        },function(responseError){
				
			
		});    
    };
});