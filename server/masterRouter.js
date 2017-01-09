require('rootpath')();

var express = require('express');
var app = express();
var master = require('../server/master.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});
app.use(bodyParser.json());

router.use(cors());

router.get('/getCountries',function(req,res){
	 var data = master.getCountries(req,res);
	 return data;
});

router.get('/getSecurityQuestions',function(req,res){
	
	 var data = master.getSecurityQuestions(req,res);
	 return data;
});


module.exports = router;
