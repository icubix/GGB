require('rootpath')();

var express = require('express');
var app = express();
var register = require('../server/register.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});

app.use(bodyParser.json());

router.use(cors());

router.post('/registration',function(req,res){
	 console.log('testing');
	 var data = register.Registration(req,res);
	 console.log(data);
	 return data;
});




module.exports = router;
