require('rootpath')();

var express = require('express');
var app = express();
var device = require('../server/device.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});

app.use(bodyParser.json());

router.use(cors());

router.post('/GetDevices',function(req,res){
	console.log("aa");
	 var data = device.GetDevices(req,res);
	 return data;
});

router.post('/getDevice',function(req,res){
	var data = device.getDevice(req,res);
	return data;
})

router.post('/updateMachineDetails',function(req,res){
	console.log(req.body);
	var data = device.updateMachineDetails(req,res);
	return data;
})


router.post('/sendActivationCode',function(req,res){
	var data = device.sendActivationCode(req,res);
	return data;
})

router.post('/saveMachineDetails',function(req,res){
	var data = device.saveMachineDetails(req,res);
	return data;
})

router.post('/checkDeviceStatus',function(req,res){
	var data = device.checkDeviceStatus(req,res);
	return data;
})


module.exports = router;
