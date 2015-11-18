var app = angular.module('awwApp', ['ngRoute']);


app.controller('pictures', function($scope, $http){
    $scope.chosenPics=[];

    $http.get('https://www.reddit.com/r/aww.json').success(function(response){


        $scope.allPics=[];

        for(var i = 0; i <25; i++){
            $scope.allPics[i] = response.data.children[i].data.preview.images[0].source.url;
        }
    });

    $scope.choosePic = function(){
        $scope.chosenPics.push(this.pic);
        console.log('hi');
        console.log($scope.chosenPics);
    }

});