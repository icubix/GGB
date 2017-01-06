var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();


var device = function(){};

device.prototype.GetDevices = function(req,res){
	var query = "select * from tblDevice where UDID LIKE '%" + req.body.DeviceUDID +"%'";
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



module.exports = new device();