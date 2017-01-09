var app = angular.module('GGBApp.chkFactory',['GGBApp.myApp']);
app.factory('checkFactory', function($http,urls){
return{
	 SearchDevices: function (data) {
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'device/GetDevices',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});