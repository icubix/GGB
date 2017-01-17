var app = angular.module('GGBApp.checkCtrl',['GGBApp.chkFactory']);
console.log("chheck testing");
app.controller('checkCtrl',function($scope,$rootScope,checkFactory){
$rootScope.IsVisible = true;
$rootScope.showUser = false;
$rootScope.showSecurity = false;

 $scope.SearchDevice = function(){

       checkFactory.SearchDevices($scope.form).success(function (resultData) {
            $scope.Devices = resultData;
          

    }).error(function (errorData) { });;

     };    
});