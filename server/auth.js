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
	console.log("abc");
	var query = "SELECT tu.*,tr.* " +
				"from tblusers tu " +
				"inner join tbluserroles tur on tu.userid = tur.userid " +
				"inner join tblroles tr on tur.roleid = tr.roleid " +
				"where UserName = " + "'" + req.body.UserName + "' and " + "PassWord = '" + req.body.PassWord + "'";
	console.log(query);
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
	var query = "update tblusers set PassWord = '" + req.body.PassWord + "'" + " where UserID = '" + req.body.userID +"'";
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