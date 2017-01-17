require('rootpath')();

var express = require('express');
var app = express();
var auth = require('../server/auth.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});

app.use(bodyParser.json());

router.use(cors());

router.post('/ValidateLogin',function(req,res){
	console.log("aa");
	 var data = auth.ValidateLogin(req,res);
	 return data;
});

router.post('/ResetPassword',function(req,res){
	var data = auth.ResetPassword(req,res);
	return data;
})


module.exports = router;
