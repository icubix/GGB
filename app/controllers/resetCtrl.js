var app = angular.module('GGBApp.resetCtrl',['GGBApp.rstFactory']);
console.log("testing iunfo");
app.controller('resetCtrl',function($scope,$rootScope,resetFactory){

/*    $rootScope.IsVisible = false;
       */    

       $scope.Reset = function () {
      alert("a");
            resetFactory.SendRestInfoDetails($scope.resetForm).success(function (resultData) {
            $scope.CountryListData = resultData;
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

});