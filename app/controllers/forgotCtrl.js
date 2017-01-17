var app = angular.module('GGBApp.forgotCtrl',['GGBApp.forgotFactory']);
app.controller('forgotCtrl', function($scope, $routescope, forgotFactory){
	$routescope.IsVisible = true;


  // $scope.SendEmail = function () {
  // 	alert("ghfhfhg");
  
  //           forgotFactory.SendEmailDetails($scope.forgotForm).success(function (resultData) {
  //           $scope.CountryListData = resultData;
  //       })
  //       .error(function (errorData) {
  //           console.log(errorData);
  //        });
  //   };



   $scope.SendEmail = function(){
     	alert("test");
       forgotFactory.SendEmailDetails($scope.forgotForm).success(function (resultData) {
	            var test = resultData;
	            // if(resultData != "")
	            // {
	            // 	$location.path('/product');
	            // }
	            // else
	            // {
	            // 	$location.path('/login');
	            // }
	            //$cookieStore.put("UserID", resultData[0].UserID);
	            //alert(resultData[0].UserID);
	            
    		})
       .error(function (errorData) 
       	{ 
       		console.log(errorData);
       	});;

     };  
});

