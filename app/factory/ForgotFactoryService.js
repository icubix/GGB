var app = angular.module('GGBApp.forgotFactory',['GGBApp.myApp']);
app.factory('forgotFactory', function($http,urls){
return{
	 SendEmailDetails: function (data) {
	 	
            return $http({
                url: urls.apiUrl +'email/sendEmail',
                method: "POST",
               data: data
            })
        },

};


});