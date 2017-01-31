var app = angular.module('GGBApp',['ngRoute','GGBApp.loginCtrl',
                                             'GGBApp.checkCtrl',
                                             'GGBApp.deviceCtrl',
                                             'GGBApp.notificationCtrlModule',
                                             'GGBApp.productCtrl',
                                             'GGBApp.securityCtrl',
                                             'GGBApp.userCtrl',
                                             'GGBApp.forgotCtrl',
                                             'GGBApp.resetCtrl',
                                             'GGBApp.addeviceCtrl'
                                             ]);


//console.log('test ing ckali');

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
  .when('/device/:ID',{
    templateUrl:'views/additionaldevice.html',
    controller:'deviceCtrl'
  })
  .when('/notification',{
    templateUrl:'views/notification.html',
    controller:'notificationCtroller'
  })
  .when('/product',{
    templateUrl:'views/productdec.html',
    controller:'productCtrl'
  })
  .when('/security',{
    templateUrl:'views/securitydetails.html',
    controller:'securityCtrl'
  })
  .when('/support',{
    templateUrl:'views/support.html'
  })
  // .when('/notification',{
  //   templateUrl:'views/notification.html'
  // })
 .when('/reset/:ID',{
    templateUrl:'views/resetpassword.html',
    controller:'resetCtrl'
  })
    .when('/adddevice',{
    templateUrl:'views/adddevice.html',
    controller:'addeviceCtrl'
  })
      .when('/adddevice/:ID',{
    templateUrl:'views/adddevice.html',
    controller:'addeviceCtrl'
  })
   .when('/forgot',{
    templateUrl:'views/forgot.html',
    controller:'forgotCtrl'
  })
  .otherwise({redirectTo: '/login'});
});
