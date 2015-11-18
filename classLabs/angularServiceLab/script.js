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
	$scope.myService= searchInfo;

	$scope.submitSearch = function(){
		console.log('searchInfo')
		$scope.myService.setTopic($scope.topic,$scope.date);
	}
});

app.controller('aboutController', function($scope, searchInfo){
	debugger
	$scope.topic = searchInfo.topic;
	$scope.date = searchInfo.date;
});

app.factory('searchInfo', function() {
	var service = {easterEgg:"You is awesome."};

	service.setTopic = function(topic, date){
		this.topic = topic;
		this.date = date;
	}

	return service;

})