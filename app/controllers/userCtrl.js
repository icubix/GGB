var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
console.log("user testing");
app.controller('userCtrl',function($scope, $rootScope){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");


});