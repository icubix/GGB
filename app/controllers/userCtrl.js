var app = angular.module('GGBApp.userCtrl',['GGBApp.addusrFactory']);
console.log("user testing");
app.controller('userCtrl',function($scope, $rootScope, addUserFactory){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");

 $scope.SaveUser = function(){

       addUserFactory.SaveRegister($scope.userform).success(function (resultData) {
            
            var test = resultData;
            alert(test);
          $location.path('/product');
    }).error(function (errorData) { });;

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