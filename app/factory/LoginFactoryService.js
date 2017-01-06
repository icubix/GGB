var app = angular.module('GGBApp.logFactory',['GGBApp.myApp']);
app.factory('loginFactory', function($http,urls){
return{
	 SAVELOGIN: FUNCTION (DATA) {
            // RETURN $HTTP({
            //     URL: URLS.APIURL +'AUTHROUTE/VALIDATELOGIN',
            //     METHOD: "POST",
            //   //  DATA: '=' + ENCODEURICOMPONENT(JSON.STRINGIFY(DATA)),
            //    DATA: DATA
            // })
        },

};


});