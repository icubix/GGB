var app = angular.module('GGBApp.addevFactory',['GGBApp.myApp']);
app.factory('addDeviceFactory', function($http,urls){
return{
	 SaveDeviceDetails: function (data) {
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'device/saveMachineDetails',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});