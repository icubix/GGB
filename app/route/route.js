var app = angular.module('GGBApp',['ngRoute','GGBApp.loginCtrl']);
console.log('test ing ckali');
app.config(function($routeProvider) {
  $routeProvider
  .when('/login',{
    templateUrl:'views/login.html',
    controller:'loginCtrl'
  })
  .when('/user',{
    templateUrl:'views/adduser.html',
    controller:'userCtrl'
  })
  .when('/check',{
    templateUrl:'views/check.html',
    controller:'checkCtrl'
  })
  .when('/device',{
    templateUrl:'views/additionaldevice.html',
    controller:'deviceCtrl'
  })
  .when('/notification',{
    templateUrl:'views/notification.html',
    controller:'notificationCtrl'
  })
  .when('/product',{
    templateUrl:'views/productdec.html',
    controller:'productCtrl'
  })
  .when('/security',{
    templateUrl:'views/securitydetails.html',
    controller:'securityCtrl'
  })
});