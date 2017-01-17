var app = angular.module('GGBApp.checkCtrl',['GGBApp.chkFactory']);
console.log("chheck testing");
app.controller('checkCtrl',function($scope,$rootScope,checkFactory){
$rootScope.IsVisible = true;
$rootScope.showUser = false;
$rootScope.showSecurity = false;
 var info;
 $scope.SearchDevice = function(){


			// var data = "[{ID: 1, UDID : ASDFASF234234S}]";
			// $scope.Devices = data;
		
 		checkFactory.SearchDevices($scope.form).success(function(resultdata){
 			console.log ("kali");
 			info = resultdata;
 			$scope.Devices = info;
 		})

	    // 	navigator.bluetooth.requestDevice({
		//   filters: [{
		//     name: 'SONY:SA-D100'
		//   }],
		//   optionalServices: ['battery_service']
		// })
		// .then(device => { $scope.Devices = device.name;

		// 				 console.log(device.name);
		// })
		// .catch(error => { console.log(error); });


		//$scope.Devices = info;

		navigator.bluetooth.requestDevice({ filters: [{
		    name: 'Redmi'
		  }],
		  optionalServices: ['battery_service']
		})
		.then(device => {
			console.log("Device Name: " + device.name); 
			console.log("Device ID : " + device.id);
			console.log("Connected : " + device.gatt.connect());
			var data = '[{"UDID" : "'+ device.id +'"}];'
			bindData();
			//console.log($scope.Devices);
			console.log("coming");

		})
		// .then(server => {
		//   // Getting Battery Service...
		//   return server.getPrimaryService('battery_service');
		// })
		// .then(service => {
		//   // Getting Battery Level Characteristic...
		//   return service.getCharacteristic('battery_level');
		// })
		// .then(characteristic => {
		//   // Reading Battery Level...
		//   return characteristic.readValue();
		// })
		// .then(value => {
		//   console.log('Battery percentage is ' + value.getUint8(0));
		// })
		//.catch(error => { console.log(error); });


		// navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
		// .then(device => { console.log(device.name); })
		// .catch(error => { console.log(error); });

		

          


    //}).error(function (errorData) { });;

    };    


    function bindData()
    {
    	console.log(info);
    	$scope.Devices = info;
    }
});