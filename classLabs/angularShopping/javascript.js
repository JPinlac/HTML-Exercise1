var app = angular.module ("practiceMod", []);
app.controller("counterController", function ($scope){
    $scope.list = [];
    $scope.total = 0;
    $scope.add = function (item, price){
        var itemList = {name: item, price: price}
        $scope.total += Number(price);
        $scope.list.push(itemList);
    };
});