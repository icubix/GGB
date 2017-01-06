var app = angular.module('GGBApp.addusrFactory',['GGBApp.myApp']);
app.factory('addUserFactory', function($http,urls){
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