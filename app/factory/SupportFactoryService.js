var app = angular.module('GGBApp.supportFactory',['GGBApp.myApp']);
app.factory('supportFactory', function($http,urls){
return{
	  SendTrackDetails: function (data) {
	 		console.log(data);
            return $http({
                url: urls.apiUrl +'Notification/trackIssueDetails',
                method: "POST",
              //  data: '=' + encodeURIComponent(JSON.stringify(data)),
               data: data
            })
        },


};


});