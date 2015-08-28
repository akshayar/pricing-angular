'use strict';

var adminApp=angular.module('myApp.admin', ['ngRoute','ngCookies']);

adminApp.service('AdminService', function ($rootScope,$http,$location,$cookieStore) {
        var service = {};
 
        service.refreshSLAConfig = refreshSLAConfig;
        service.refreshServerConfig = refreshServerConfig;
        return service;
 
        function refreshSLAConfig(callback) {
 
            console.log("Admin Service-refreshSLAConfig");
			
			$http.post('rest/admin/refreshSLAConfig')
            .success(function (response) {
			    console.log("Admin Service-refreshSLAConfig-response="+response);
				response.success=true;
                callback(response);
            })
			.error(function (response) {
			    console.log("Admin Service-refreshSLAConfig-response="+response);
                callback(response);
            });
 
        }
        function refreshServerConfig(username, password, callback) {
        	 
            console.log("Admin Service-refreshServerConfig");

            $http.post('rest/admin/refreshServerConfig')
            .success(function (response) {
			    console.log("Admin Service-refreshServerConfig-response="+response);
				response.success=true;
                callback(response);
            })
			.error(function (response) {
			    console.log("Admin Service-refreshServerConfig-response="+response);
                callback(response);
            });
        }
 
 
 });
 adminApp.controller('adminCtrl', function($location,AdminService) {
    var vm = this;
    console.log("admin Controller-called");
    vm.refreshServerConfig = refreshServerConfig;
    vm.refreshSLAConfig = refreshSLAConfig;
	
    function refreshServerConfig(){
	    console.log("admin Controller-refreshServerConfig=");
		vm.dataLoading = true;
        AdminService.refreshServerConfig(function (response) {
                if (response.success) {
				    console.log("Admin Success");
				    vm.dataLoading = false;
                    $location.path('/adminOps');
                } else {
                    console.log("Admin Failed");
                    vm.dataLoading = false;
                }
            });

        
    };
    function refreshSLAConfig(){
	    console.log("admin Controller-refreshSLAConfig=");
		vm.dataLoading = true;
        AdminService.refreshSLAConfig(function (response) {
                if (response.success) {
				    console.log("Admin Success");
				    vm.dataLoading = false;
                    $location.path('/adminOps');
                } else {
                    console.log("Admin Failed");
                    vm.dataLoading = false;
                }
            });

        
    };
});