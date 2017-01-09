var app = angular.module('GGBApp.loginCtrl',['GGBApp.logFactory']);

app.controller('loginCtrl',function($scope,$rootScope,$location,loginFactory){

      $rootScope.IsVisible = false;
     $scope.LogIn = function(){
     	alert("test")
       loginFactory.SaveLogin($scope.form).success(function (resultData) {
	            var test = resultData;
	            if(resultData != "")
	            {
	            	$location.path('/product');
	            }
	            else
	            {
	            	$location.path('/login');
	            }
	            //$cookieStore.put("UserID", resultData[0].UserID);
	            //alert(resultData[0].UserID);
	            
    		})
       .error(function (errorData) 
       	{ 
       		console.log(errorData);
       	});;

     };     


});