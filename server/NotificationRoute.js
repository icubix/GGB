require('rootpath')();

var express = require('express');
var app = express();
var notification = require('../server/Notification.js');
var bodyParser = require('body-parser');
var cors = require('cors');

router = express.Router({
	mergeParms: true
});

app.use(bodyParser.json());

router.use(cors());

router.post('/trackIssueDetails',function(req,res){
	console.log("aa");
	 var data = notification.trackIssueDetails(req,res);
	 return data;
});

router.post('/getIssueDetails',function(req,res){
	var data = notification.ShowEmails(req,res);
	return data;
})


module.exports = router;
