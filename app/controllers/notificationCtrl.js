var app = angular.module('GGBApp.notificationCtrl',['GGBApp.notifcatonFactory']);
console.log("notification testing");
app.controller('notificationCtrl',function($scope,$rootScope,notifcatonFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

$scope.ShowEmails = function(){
      
      $scope.notification_form.RaisedBy = 25;
      $scope.notification_form.UserID =36;
      console.log($scope.notification_form);
       notifcatonFactory.GetEmails($scope.notification_form).success(function (resultData) {
            $scope.userInfo = resultData;
          

    }).error(function (errorData) { });;

     };

       (function () {
         
        $scope.ShowEmails();
        
         })();  

});