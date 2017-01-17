var app = angular.module('GGBApp.rstFactory',['GGBApp.myApp']);
app.factory('resetFactory', function($http,urls){
return{

	 SendRestInfoDetails: function (data) {
	 	alert(data);
            return $http({
                url: urls.apiUrl +'auth/ResetPassword',
                method: "POST",
               data: data
            })
        },

};


});