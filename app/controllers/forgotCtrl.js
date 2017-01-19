var app = angular.module('GGBApp.forgotCtrl',['GGBApp.forgotFactory']);
app.controller('forgotCtrl', function($scope, $rootScope, forgotFactory){
	 $rootScope.IsVisible = true;
   $scope.SendEmail = function(){
     	alert("test");
      
       forgotFactory.SendEmailDetails($scope.forgotForm).success(function (resultData) {
	            var test = resultData;
              $location.path('/login');
	            
    		})
       .error(function (errorData) 
       	{ 
       		console.log(errorData);
       	});

     };  
});

