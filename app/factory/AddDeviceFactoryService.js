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

        UpdateDeviceDetails:function (data) {

	 		console.log(data);
            return $http({
                url: urls.apiUrl +'device/updateMachineDetails',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

        CheckDeviceDetails:function (data) {
        	
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'device/checkDeviceStatus',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});