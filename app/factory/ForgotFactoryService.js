var app = angular.module('GGBApp.forgotFactory',['GGBApp.myApp']);
app.factory('forgotFactory', function($http,urls){
return{
	 SendEmailDetails: function (data) {
	 	alert(data);
            // return $http({
            //     url: urls.apiUrl +'device/GetDevices',
            //     method: "POST",
            //    data: data
            // })
        },

};


});