var app = angular.module('GGBApp.notificationCtrl',['GGBApp.supportFactory']);
console.log("notification testing");
app.controller('supportFactory',function($scope,$rootScope,supportFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

$scope.SendTrackInfo = function(){
      
      $scope.support_form.RaisedBy = 25;
      $scope.support_form.CompanyID =4;
      console.log($scope.support_form);
       supportFactory.SendTrackDetails($scope.support_form).success(function (resultData) {
            $scope.Devices = resultData;
          

    }).error(function (errorData) { });;

     };  

});