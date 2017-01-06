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
	 console.log('testing');
	 var data = master.getCountries(req,res);
	 console.log(data);
	 return data;
});

router.get('/getSecurityQuestions',function(req,res){
	 console.log('securityQuestions');
	 var data = master.getSecurityQuestions(req,res);
	 console.log(data);
	 return data;
});


module.exports = router;
