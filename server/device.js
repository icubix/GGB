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
	console.log(req.body);
	var query = "select * from tblDevice where UDID LIKE '%" + req.body.DeviceUDID +"%'";
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

device.prototype.getDevice = function(req,res){
	var query = " select td.*,tm.* from tblDevice td " +
				" inner join tblMachineDetails tm on td.UDID = tm.DeviceID " +
				"  where td.UDID='" + req.body.DeviceUDID +"'";
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

device.prototype.updateMachineDetails = function(req,res){
	var query = "update tblMachineDetails set EngineNumber = '" + req.body.EngineNumber + "', " +
				"MachineNumber = '" + req.body.MachineNumber + "', " +
				"RFID = '" + req.body.RFID + "' " +
				"where DeviceID = '" + req.body.UDID + "'";
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
}

device.prototype.sendActivationCode = function(req,res){
	var query = "insert into tblmobileactivationcodes(DeviceID,ActivationCode,MobileNumber) values('" +
				req.body.UDID + "', " +
				"'" + req.body.ActivationCode + "'," +
				"'" + req.body.MobileNumber + "'" +
				")";
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
 
}



module.exports = new device();