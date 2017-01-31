var app = angular.module('GGBApp.notificationCtrlModule',['GGBApp.notifcatonFactory']);

app.controller('notificationCtroller',function($scope,$rootScope,notifcatonFactory){
$scope.notification_form = {};
$rootScope.IsVisible = true;
$scope.ShowEmails = function(){
      
      $scope.notification_form.RaisedBy = 25;
      $scope.notification_form.UserID =38;
      console.log($scope.notification_form);
      notifcatonFactory.GetEmails($scope.notification_form).success(function (resultData) {
            $scope.userInfo = resultData;
            console.log(resultData);
      }).error(function (errorData) { });;

     };

   (function () {
      $scope.ShowEmails();
     })();  
});