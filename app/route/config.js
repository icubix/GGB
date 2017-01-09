var app = angular.module('GGBApp.myApp', []);

app.constant('api', 'http://localhost:2424/')
app.service('urls', function(api){ this.apiUrl = api;})
