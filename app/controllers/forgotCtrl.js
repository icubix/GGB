var app = angular.module('GGBApp.forgotCtrl',['GGBApp.forgotFactory']);
app.controller('forgotCtrl', function($scope, $rootScope, forgotFactory,$location){
	 $rootScope.IsVisible = false;
   $scope.SendEmail = function(){
     	alert("test");
      
       forgotFactory.SendEmailDetails($scope.forgotForm).success(function(resultData){
              alert("hello");
	            var test = resultData;
              $location.path('/login');
	            
    		})
       .error(function (errorData) 
       	{ 
       		console.log(errorData);
          //$location.path('/login');
       	});

     };  
});

