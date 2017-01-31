var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();


var Notification = function(){};

Notification.prototype.trackIssueDetails = function(req,res){
	console.log(req.body);
	var query = "insert into tblIssueDetails(CompanyID,IssueDetails,RaisedBy) values(" +
				"'" + req.body.CompanyID + "'," +
				"'" + req.body.IssueDetails + "'," +
				"'" + req.body.RaisedBy + "'" +
				")";

	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			SentEmailDetails(req.body.FromEmailAddress,req.body.ToEmailAddress,req.body.AssignedTo,req.body.RaisedBy,req.body.Subject,req.body.Body);
			return res.json(result);
		}
	});
};

function SentEmailDetails(FromEmailAddress,ToEmailAddress,AssignedTo,AssignedBy,Subject,Body){
	var query = "insert into tblEmailDetails(AssignedTo,AssignedBy,Body,FromAddress,ToAddress,Subject) values(" +
				"'" + AssignedTo + "'," +
				"'" + AssignedBy + "'," +
				"'"	+ Body + "'," +
				"'" + FromEmailAddress + "'," +
				"'" + ToEmailAddress + "'," + 
				"'" + Subject + "'" +
				")";
	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(result.insertId);
		}
	});
}


Notification.prototype.ShowEmails = function(req,res) {
	var query = "select * from tblEmailDetails where AssignedTo = '" + req.body.UserID + "'";
	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			return res.json(result);
		}
	});
};




module.exports = new Notification();