var app = angular.module('GGBApp.addusrFactory',['GGBApp.myApp']);
app.factory('addUserFactory', function($http,urls){
return{


	 SaveRegister: function (data) {
	 	
	 	//alert(data);
            return $http({
                url: urls.apiUrl +'register/Registration',
                method: "POST",
               // data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data,
               
            })
        },

          GetCountryDetails : function(){
          var url = urls.apiUrl +'master/getCountries';

            return $http.get(url);
        },

        GetSecurityDetails : function(){
          var url = urls.apiUrl +'master/getSecurityQuestions';

            return $http.get(url);
        },

        


};


});