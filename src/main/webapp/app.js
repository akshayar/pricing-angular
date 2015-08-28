var myApp = angular
		.module("myApp", [ 'ngRoute', 'myApp.login', 'myApp.price' ])
		.controller("mainCtrl", function($scope, $routeParams, $http) {

		}).config([ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'login/login.html',
				controller : 'loginCtrl',
				controllerAs : 'vm'
			}).when('/login', {
				templateUrl : 'login/login.html',
				controller : 'loginCtrl',
				controllerAs : 'vm'
			}).when('/price', {
				templateUrl : 'price/price.html',
				controller : 'priceCtrl',
				controllerAs : 'vm'
			}).when('/adminOps', {
				templateUrl : 'admin/admin.html',
				controller : 'adminCtrl',
				controllerAs : 'vm'
			}).otherwise({
				redirectTo : '/login'
			});
		} ]);
