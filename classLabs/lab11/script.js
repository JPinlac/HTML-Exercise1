// Code goes here
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'view1.html'
    })
    .when('/view2', {
      templateUrl: 'view2.html'
    })
    .when('/view3', {
      templateUrl: 'view3.html'
    })
    .otherwise({
      redirect: '/'
    });
});

app.controller("routeCtrl", function($scope){
  console.log("WHOA")
})