var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
app.controller('userCtrl',function($scope, $rootScope, addUserFactory){
$rootScope.IsVisible = false;

 $scope.SaveUser = function(){
       addUserFactory.SaveRegister($scope.userform).success(function (resultData) {
            var test = resultData;
            $location.path('/product');
    })
    .error(function (errorData) 
    	{ 
    		console.log(errorData);
    	});;

 };

});