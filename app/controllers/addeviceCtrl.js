var app = angular.module('GGBApp.addeviceCtrl',['GGBApp.addevFactory']);
console.log("chheck testing");
app.controller('addeviceCtrl',function($scope,$rootScope,addDeviceFactory,$location){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

$scope.addDeviceForm = {};


 $scope.SaveAddDevice = function () {
 			$scope.addDeviceForm.WRSNo = "TT/09/WRS/RRB/2017";	
 			$scope.addDeviceForm.UserID = 36;
  			console.log($scope.addDeviceForm.WRSNo);
  			console.log("kali");
            addDeviceFactory.SaveDeviceDetails($scope.addDeviceForm).success(function (resultData) {
            console.log(resultData);
            if(resultData != null)
            {
            	$location.path('/check');
            }
            //$scope.Device = resultData;


        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

});	