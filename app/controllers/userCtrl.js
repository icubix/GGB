var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
app.controller('userCtrl',function($scope, $rootScope, addUserFactory){
$rootScope.IsVisible = false;

 $scope.SaveUser = function(){
       addUserFactory.SaveRegister($scope.userform).success(function (resultData) {
            var test = resultData;

            $location.path('/product');
    })
    .error(function (errorData) 
    	{ 
    		console.log(errorData);
    	});
     };     

  $scope.GetCountries = function () {
  
            addUserFactory.GetCountryDetails().success(function (resultData) {
            $scope.CountryListData = resultData;
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

 };

      $scope.GetSecurities = function () {
 
            addUserFactory.GetSecurityDetails().success(function (resultData) {
            $scope.SecutiryList = resultData;
            alert(resultData)
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

   
    (function () {
         
        $scope.GetCountries();
        $scope.GetSecurities();
         })();

});