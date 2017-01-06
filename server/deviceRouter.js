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

router.post('/getDevices',function(req,res){
	 var data = device.GetDevices(req,res);
	 return data;
});




module.exports = router;
