var app = angular.module('GGBApp.deviceCtrl',['GGBApp.dvcFactory']);
console.log("device testing");
app.controller('deviceCtrl',function($scope,$rootScope,$routeParams,deviceFactory, addDeviceFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");
var DeviceID = $routeParams.ID;
$scope.form = {};

 
 $scope.GetDevice = function(){

 	   $scope.form.DeviceUDID = DeviceID;
       $scope.form.UserID = 36;
 	   //console.log($scope.form.DeviceID);
       deviceFactory.GetDevice($scope.form).success(function (resultData) {
            $scope.Devices = resultData;
             // angular.forEach(resultData, function(value, key) {

             // 	  $scope.EditDeviceForm.UDID = value.UDID;
             //   });  
           

          console.log( $scope.Devices);
    	}).error(function (errorData) { });;

     };   

(function () {
         
        $scope.GetDevice();
       
         })();
   

});

