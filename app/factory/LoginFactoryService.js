var app = angular.module('GGBApp.logFactory',['GGBApp.myApp']);
app.factory('loginFactory', function($http,urls){
return{
	 SaveLogin: function (data) {
	 	alert(data);
            return $http({
                url: urls.apiUrl +'master/ValidateLogin',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});