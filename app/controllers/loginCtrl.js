var app = angular.module('GGBApp.loginCtrl',['GGBApp.logFactory']);
console.log("testing iunfo");



app.controller('loginCtrl',function($scope,$rootScope,loginFactory){

    $rootScope.IsVisible = false;
     $scope.LogIn = function(){

       loginFactory.SaveLogin($scope.form).success(function (resultData) {
            
          $location.path('/product');
    }).error(function (errorData) { });;

     };     


});