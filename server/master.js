var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();


var master = function(){};

master.prototype.getCountries = function(req,res){
	var query = "select * from tblcountries";
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

master.prototype.getSecurityQuestions = function(req,res){
	var query = "select * from tblmastersecurityquestions";
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

module.exports = new master();