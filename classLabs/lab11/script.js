// Code goes here
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'view1.html';
      controller: 'counterController'
    })
    .when('/view2', {
      templateUrl: 'view2.html'
      controller: 'counterController'
    })
    .when('/view3', {
      templateUrl: 'view3.html'
      controller: 'counterController'
    })
    .otherwise({
      redirect: '/'
      controller: 'counterController'
    });
});

app.controller("counterController", function ($scope){
    $scope.list = [];
    $scope.total = 0;
    $scope.add = function (item, price){
        var itemList = {name: item, price: price}
        $scope.total += Number(price);
        $scope.list.push(itemList);
    };