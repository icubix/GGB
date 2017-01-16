var app = angular.module('GGBApp.checkCtrl',['GGBApp.chkFactory']);
console.log("chheck testing");
app.controller('checkCtrl',function($scope,$rootScope,checkFactory){
$rootScope.IsVisible = true;
$rootScope.showUser = false;
$rootScope.showSecurity = false;

 $scope.SearchDevice = function(){

       // checkFactory.SearchDevices($scope.form).success(function (resultData) {
            // $scope.Devices = resultData;

        navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
			.then(device => device.gatt.connect())
			.catch(error => { console.log(error); });


		// navigator.bluetooth.requestDevice({ filters: [{ services: ['battery_service'] }] })
		// .then(device => {
		//   // Human-readable name of the device.
		//   console.log(device.name);

		//   // Attempts to connect to remote GATT Server.
		//   //return device.gatt.connect();
		// })
		// .then(server => { /* ... */ })
		// .catch(error => { console.log(error); });

		// navigator.bluetooth.requestDevice({
		//   filters: [{ services: [0xffe5] }]
		// })
		//   .then(function(device) {
		//     // Step 2: Connect to it
		//     return device.gatt.connect();
		//   })
		//   .then(function(server) {
		//     // Step 3: Get the Service
		//     return server.getPrimaryService(0xffe5);
		//   })
		//   .then(function(service) {
		//     // Step 4: get the Characteristic
		//     return service.getCharacteristic(0xffe9);
		//   })
		//   .then(function(characteristic) {
		//     // Step 5: Write to the characteristic
		//     var data = new Uint8Array([0xbb, 0x25, 0x05, 0x44]);
		//     return characteristic.writeValue(data);
		//   })
		//   .catch(function(error) {
		//      // And of course: error handling!
		//      console.error('Connection failed!', error);
		//   });

          
    };    
});