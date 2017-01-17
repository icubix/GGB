var app = angular.module('GGBApp.addeviceCtrl',['GGBApp.addevFactory']);
console.log("chheck testing");
app.controller('addeviceCtrl',function($scope,$rootScope,addDeviceFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");


 $scope.SaveAddDevice = function () {
  
            addDeviceFactory.SaveDeviceDetails($scope.addDeviceForm).success(function (resultData) {
            $scope.CountryListData = resultData;
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

});