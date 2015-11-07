'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'view1.html',
			controller: 'homeController'
		})
		.when('/about', {
			templateUrl: 'view2.html',
			controller: 'aboutController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

app.controller('homeController', function($scope, searchInfo){

});

app.controller('aboutController', function($scope, searchInfo){

});

app.factory('searchInfo', function() {
	var service = {};
	var _topic = '';
	var _date = '';


})