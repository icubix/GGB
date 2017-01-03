var app = angular.module('GGBApp',['ngRoute','GGBApp.loginCtrl']);
console.log('test ing ckali');
app.config(function($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl:'views/login.html',
    controller:'loginCtrl'
  })
});
