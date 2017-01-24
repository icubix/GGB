var app = angular.module('GGBApp.notifcatonFactory',['GGBApp.myApp']);
app.factory('notifcatonFactory', function($http,urls){
return{
	 GetEmails: function (data) {
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'Notification/ShowEmails',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },

};


});