var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
console.log("user testing");
app.controller('userCtrl',function($scope, $rootScope, addUserFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

 $scope.SaveUser = function(){

       addUserFactory.SaveRegister($scope.userform).success(function (resultData) {
            
            var test = resultData;
            alert(test);
          $location.path('/product');
    }).error(function (errorData) { });;

     };     



});