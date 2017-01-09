var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
app.controller('userCtrl',function($scope, $rootScope, addUserFactory,$location){

 $rootScope.IsVisible = false;

 $scope.SaveUser = function(){
       $scope.userform.RoleID = 1;
       addUserFactory.SaveRegister($scope.userform).success(function (resultData) {
             alert(resultData);
             if(resultData != "")
              {
                $location.path('/product');
              }
              else
              {
                $location.path('/login');
              }
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