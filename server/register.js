var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();


var register = function(){};

register.prototype.Registration = function(req,res){
	console.log("success");
	var query = "insert into tblusers(UserName,PassWord,EmailAddress,FirstName,LastName,MobileNumber,Title,isActive) values (" +
				"'" + req.body.UserName + "'," +
				"'" + req.body.PassWord + "'," +
				"'" + req.body.EmailAddress + "'," +
				"'" + req.body.FirstName + "'," +
				"'" + req.body.LastName + "'," +
				"'" + req.body.MobileNumber + "'," +
				"'" + req.body.Title + "'," +
				"'" + 1 + "'"
				+")";
	console.log(req.body.UserName);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(result.insertId);
			AddUserRoles(result.insertId,req.body.RoleID,req.body.Addressone,req.body.addresstwo,req.body.city,req.body.state,req.body.countryID,req.body.zipcode,req.body.Phone,req.body.fax,req.body.CompanyName,req.body.QuestionID,req.body.Answer);
			return res.json(result);
		}
	});
};

function AddUserRoles(UserID,RoleID,AddressOne,AddressTwo,City,State,CountryID,ZipCode,Phone,fax,CompanyName,QuestionID,Answer)
{
	console.log(UserID);
	console.log(RoleID);

	var query = "insert into tbluserroles(UserID,RoleID) values(" +
				 UserID + "," +
				 RoleID + ""
				+")";
	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			
			console.log(result.insertId);
			AddAddress(AddressOne,AddressTwo,City,State,CountryID,ZipCode,Phone,fax,UserID,CompanyName,QuestionID,Answer);
			
		}
	});
}

function AddAddress(AddressOne,AddressTwo,City,State,CountryID,ZipCode,Phone,fax,UserID,CompanyName,QuestionID,Answer)
{
	
	var query = "insert into tbladdress(Addressone,addresstwo,city,state,countryID,zipcode,Phone,fax) values(" +
				"'" + AddressOne + "'," +
				"'" + AddressTwo + "'," +
				"'" + City + "'," +
				"'" + State + "'," +
				"'" + CountryID + "'," +
				"'" + ZipCode + "'," +
				"'" + Phone + "'," +
				"'" + fax + "'" +
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
			var AddressID = result.insertId;

			AddCompany(CompanyName,UserID,AddressID,QuestionID,Answer);
			
		}
	});	
}


function AddCompany(CompanyName,UserID,AddressID,QuestionID,Answer)
{
	var query = "insert into tblcompany (companyname,userid) values (" +
				"'" + CompanyName + "'," +
				"'" + UserID + "'" +
				")";
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(result.insertId);
			var CompanyID = result.insertId;

			AddCompanyAddress(CompanyID,AddressID);
			AddSecurityQuestions(UserID,QuestionID,Answer);
			
		}
	});	
}


function AddCompanyAddress(CompanyID,AddressID)
{
	var query = "insert into tblcompanyaddress(CompanyID,AddressID) values(" +
				"'" + CompanyID + "'," +
				"'" + AddressID + "'" +
				")";

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

function AddSecurityQuestions(UserID,QuestionID,Answer)
{
	var query = "insert into tblusersecurityquestions(UserID,QuestionID,Answer,isActive) values(" +
				"'" + UserID + "'," +
				"'" + QuestionID + "'," +
				"'" + Answer + "'," +
				 1 + "," +
				")";

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


module.exports = new register();