require('rootpath')();

var express = require('express');
var app = express();
var email = require('../server/Email.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});

app.use(bodyParser.json());

router.use(cors());

router.post('/sendEmail',function(req,res){
	
	 var data = email.sendEmail(req,res);
	 return data;
});




module.exports = router;
