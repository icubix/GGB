var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();


var auth = function(){};

auth.prototype.ValidateLogin = function(req,res){
	var query = "select * from tblusers where UserName = " + "'" + req.body.UserName + "' and " + "PassWord = '" + req.body.PassWord + "'";
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			var LoggedIn = UpdateSSO(req.body.UserID);
			return res.json(result);
		}
	});
};

function UpdateSSO(UserID)
{
	
}

auth.prototype.ResetPassword = function(req,res){
	var query = "update tblusers set PassWord = '" + req.body.PassWord + "'" + " where UserName = '" + req.body.UserName +"'";
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
	
}

module.exports = new auth();