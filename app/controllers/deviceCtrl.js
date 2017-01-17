var app = angular.module('GGBApp.deviceCtrl',['GGBApp.dvcFactory']);
console.log("device testing");
app.controller('deviceCtrl',function($scope,$rootScope,$routeParams,deviceFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

// var testid = $routeParams.ID;
// alert(testid);
 $scope.GetDevice = function(){

       deviceFactory.GetDevice($scope.form).success(function (resultData) {
            $scope.Devices = resultData;
          

    }).error(function (errorData) { });;

     };    
});

