'use strict';

var loginApp=angular.module('myApp.login', ['ngRoute','ngCookies']);

loginApp.service('AuthenticationService', function ($rootScope,$http,$location,$cookieStore) {
        var service = {};
 
        service.Login = Login;
        service.SetSuccess = SetSuccess;
        service.ClearCredentials = ClearCredentials;
		service.IsAutenticated = IsAutenticated;
 
        return service;
 
        function Login(username, password, callback) {
 
            console.log("Authentication Service-username="+username);
			
			if(IsAutenticated()){
			   $location.path('/price');
			   return;
			}
			$http.post('rest/users/login', { username: username, password: password })
            .success(function (response) {
			    console.log("Authentication Service-response="+response.sessionid);
				response.success=true;
                callback(response);
            })
			.error(function (response) {
			    console.log("Authentication Service-response="+response.sessionid);
                callback(response);
            });
 
        }
 
        function SetSuccess(username) {
            $rootScope.authenticated=true;
            $rootScope.globals = {
                currentUser: {
                    username: username,
                    authenticated: true
                }
            };
 
            //$http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
            $cookieStore.put('globals', $rootScope.globals);
        }
 
        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
			$rootScope.authenticated=false;
        }
		function IsAutenticated(){
		   if($rootScope.globals && $rootScope.globals.currentUser && $rootScope.globals.currentUser.authenticated){
			   console.log("User already authenticated");
			   return true;
			}else{
			   return false;
			}
		}
 });
 loginApp.controller('loginCtrl', function($location,AuthenticationService) {
    var vm = this;
    console.log("Login Controller-called");
	if(AuthenticationService.IsAutenticated()){
			   $location.path('/price');
			   return;
    }
    vm.login = login;
	
    function login(){
	    console.log("Login Controller-username="+vm.username);
		vm.dataLoading = true;
        AuthenticationService.Login(vm.username, vm.password, function (response) {
                if (response.success) {
				    console.log("Authentication Success");
                    AuthenticationService.SetSuccess(vm.username, vm.password);
                    $location.path('/price');
                } else {
                    console.log("Authentication Failed");
                    vm.dataLoading = false;
                }
            });

        
    };
});