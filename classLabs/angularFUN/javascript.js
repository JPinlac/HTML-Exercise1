var app = angular.module('myApp', [])

app.controller('angularSearch', function ($scope){
    $scope.workers=[{name:'John',mood:'tired'}, {name:'Juan',mood:'Chippy'},{name:'Juanita',mood:'mad'}, {
        name:'Steve',mood:'drunk'}]
    $scope.myFilter = function(view){
        var flag = false;
        // console.log($scope.workers)
        // angular.forEach($scope.workers, function(key,value){
        //     console.log(key)
        //     if(key.hasOwnProperty(view)){
        //         flag=true;
        //     }
        // });
        console.log(view)
        if(flag = true)
            return ''
        else
            return view;
    }
})