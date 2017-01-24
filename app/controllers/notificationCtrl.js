var app = angular.module('GGBApp.notificationCtrl',['GGBApp.notifcatonFactory']);
console.log("notification testing");
app.controller('notificationCtrl',function($scope,$rootScope,notifcatonFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

$scope.SendTrackInfo = function(){
      
      $scope.notification_form.RaisedBy = 25;
      $scope.notification_form.CompanyID =4;
      console.log($scope.notification_form);
       notifcatonFactory.SendTrackDetails($scope.notification_form).success(function (resultData) {
            $scope.Devices = resultData;
          

    }).error(function (errorData) { });;

     };  

});