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

router.post('/validate',function(req,res){
	 console.log('testing');
	 var data = auth.ValidateLogin(req,res);
	 console.log(data);
	 return data;
});

router.post('/resetpassword',function(req,res){
	console.log('reset password');
	var data = auth.ResetPassword(req,res);
	console.log(data);
	return data;
})


module.exports = router;
