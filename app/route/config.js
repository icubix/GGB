var app = angular.module('GGBApp.myApp', []);

app.constant('api', 'http://192.168.1.100:2424/')
app.service('urls', function(api){ this.apiUrl = api;})
