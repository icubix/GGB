var app = angular.module('GGBApp.dvcFactory',['GGBApp.myApp']);
app.factory('deviceFactory', function($http,urls){
return{
	 GetDevice: function (data) {
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'device/GetDevice',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});