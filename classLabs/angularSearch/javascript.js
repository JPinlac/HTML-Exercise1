// $(document).ready(function(){
var app = angular.module('myApp', []);

app.controller('moodSearcher', function($scope){
	$scope.workers=[{name:'Jon', mood:'tired'},
					{name:'Juan', mood:'hyper'},
					{name:'John', mood:'relaxed'},
					{name:'Joan', mood:'chippy'}];
	$scope.myFilter = function(view){
		// if(view === "name" || view==="mood"){
		// 	return '';
		// }
		// return view;
		var flag = false
		angular.forEach($scope.workers, function(value,key){
			if(value.hasOwnProperty(view)){
				flag=true
			}
			});

		if(flag===true){
			return '';
		}
		else{
			return view;
		}




	};
});

// })