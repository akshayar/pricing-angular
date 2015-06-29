/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = 'World' ;
     $scope.clickHandler = function(){
        window.alert('Clicked!');
    };
});*/

var myApp=angular.module("myApp", ['ngRoute','myApp.login','myApp.price']).controller("mainCtrl", function($scope,$routeParams,$http) {
     
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl',
	controllerAs: 'vm'
  })
  .when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl',
	controllerAs: 'vm'
  })
  .when('/price', {
    templateUrl: 'price/price.html',
    controller: 'priceCtrl',
	controllerAs: 'vm'
  })
  .otherwise({ redirectTo: '/login' });
}]);
