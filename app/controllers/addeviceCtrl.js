var app = angular.module('GGBApp.addeviceCtrl',['GGBApp.addevFactory','GGBApp.dvcFactory']);
//console.log("chheck testing");
app.controller('addeviceCtrl',function($scope,$rootScope,$routeParams,addDeviceFactory,deviceFactory,$location){
$rootScope.IsVisible = true;
//alert("Login controlloer calling");
$scope.form = {};
$scope.addDeviceForm = {};

var DeviceID = $routeParams.ID;
 $scope.SaveAddDevice = function () {
 			$scope.addDeviceForm.WRSNo = "TT/09/WRS/RRB/2017";	
 			$scope.addDeviceForm.UserID = 36;
  			// console.log($scope.addDeviceForm.WRSNo);
  			// console.log("kali");

              $scope.form.DeviceUDID = $scope.addDeviceForm.UDID  
             addDeviceFactory.CheckDeviceDetails( $scope.form).success(function (resultData) {
                                console.log(resultData);
                                if(resultData != 1)
                                {
                                    //console.log($scope.addDeviceForm)
                                                    addDeviceFactory.UpdateDeviceDetails($scope.addDeviceForm).success(function (resultData) {
                                                    //console.log(resultData);
                                                    if(resultData != null)
                                                    {
                                                        $location.path('/check');
                                                    }
                                                    //$scope.Device = resultData;


                                                }) .error(function (errorData) {
                                            console.log(errorData);
                                            });
                                }
                                else
                                {

                                                 addDeviceFactory.SaveDeviceDetails($scope.addDeviceForm).success(function (resultData) {
                                                console.log(resultData);
                                                if(resultData != null)
                                                {
                                                    $location.path('/check');
                                                }
                                                //$scope.Device = resultData;


                                            }) .error(function (errorData) {
                                                console.log(errorData);
                                             });

                                }
                                //$scope.Device = resultData;


                            }) .error(function (errorData) {
                        console.log(errorData);
                        });


            
                        
           
       
    };

   $scope.GetDevice = function(){

     $scope.form.DeviceUDID = DeviceID;
       $scope.form.UserID = 36;
     //console.log($scope.form.DeviceID);
       deviceFactory.GetDevice($scope.form).success(function (resultData) {
            $scope.Devices = resultData;
             angular.forEach(resultData, function(value, key) {

                 $scope.addDeviceForm.UDID = value.UDID;
                 $scope.addDeviceForm.MachineNumber = value.MachineNumber;
                 $scope.addDeviceForm.Make = value.Make;
                 $scope.addDeviceForm.RFID = value.RFID;
                 $scope.addDeviceForm.Model = value.Model;
                 $scope.addDeviceForm.EngineNumber = value.EngineNumber;
                 $scope.addDeviceForm.TypeOfMachine = value.TypeOfMachine;
                 $scope.addDeviceForm.Year = value.Year;
                 $scope.addDeviceForm.Type = value.Type;
                 $scope.addDeviceForm.MobileNumber = value.MobileNumber;
                 $scope.addDeviceForm.ActivationCode = value.ActivationCode;
                 $scope.addDeviceForm.CO = value.CO;
                 $scope.addDeviceForm.HC = value.HC;
               });  
           

                }).error(function (errorData) { });;

     };   

(function () {
         if(DeviceID != "" && DeviceID != undefined)
         {
        $scope.GetDevice();
        }
         })();

});	