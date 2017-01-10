var app = angular.module('GGBApp.checkCtrl',['GGBApp.chkFactory']);
console.log("chheck testing");
app.controller('checkCtrl',function($scope,$rootScope,checkFactory){
$rootScope.IsVisible = true;


 $scope.SearchDevice = function(){

       checkFactory.SearchDevices($scope.DeviceUDID).success(function (resultData) {
            
            var test = resultData;
            // alert(test);
          //$location.path('/product');
    }).error(function (errorData) { });;

     };    


 
    // (function () {
         
     
    //      })();


});