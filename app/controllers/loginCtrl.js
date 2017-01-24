var app = angular.module('GGBApp.loginCtrl',['GGBApp.logFactory']);

app.controller('loginCtrl',function($scope,$rootScope,$location,loginFactory){

      $rootScope.IsVisible = false;
     $scope.LogIn = function(){
     
       loginFactory.SaveLogin($scope.form).success(function (resultData) {
	            var test = resultData;
              
              console.log(resultData);
	            if(resultData != "")
	            {
	            	$location.path('/product');
                if(test[0].RoleName = 'Admin')
                {
                  $scope.support = false;
                }
                else
                {
                  $scope.support = true;
                }
	            }
	            else
	            {
	            	$location.path('/login');
	            }
    		})
       .error(function (errorData) 
       	{ 
       		console.log(errorData);
       	});;

     };     


});