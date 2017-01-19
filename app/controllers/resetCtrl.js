var app = angular.module('GGBApp.resetCtrl',['GGBApp.rstFactory']);
console.log("testing iunfo");
app.controller('resetCtrl',function($scope,$rootScope,resetFactory,$routeParams){

/*    $rootScope.IsVisible = false;
       */    

      var userID = $routeParams.ID;
      // alert(userID);
      // $scope.resetForm.userID = userID;
   
      $scope.Reset = function() {
            console.log($scope.resetForm);
            $scope.resetForm.userID = userID;
            resetFactory.SendRestInfoDetails($scope.resetForm).success(function (resultData) {
            $scope.CountryListData = resultData;
        })
        .error(function (errorData) {
            console.log(errorData);
         });
    };

    


});