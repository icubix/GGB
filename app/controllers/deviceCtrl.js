var app = angular.module('GGBApp.deviceCtrl',['GGBApp.dvcFactory']);
console.log("device testing");
app.controller('deviceCtrl',function($scope,$rootScope,$routeParams,deviceFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");


 $scope.GetDevice = function(uuID){

       deviceFactory.GetDevice($scope.form).success(function (resultData) {
            $scope.Devices = resultData;
          

    }).error(function (errorData) { });;

     };   


     (function()
     {
     	var uuId = $routeParams.ID;
     	$scope.GetDevice(uuId);
     })(); 

});

