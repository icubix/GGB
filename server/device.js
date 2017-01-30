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
	var query = "select * from tblDevice";
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
	var query = " select distinct td.*,tm.* from tblDevice td " +
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
			console.log(result);
			return res.json(result);
		}
	});
};

device.prototype.updateMachineDetails = function(req,res){
	var query = "update tblMachineDetails set EngineNumber = '" + req.body.EngineNumber + "', " +
				"MachineNumber = '" + req.body.MachineNumber + "', " +
				"RFID = '" + req.body.RFID + "', " +
				"Make = '" + req.body.Make +"', " +
				"Model = '" + req.body.Model +"', " +
				"Type = '" + req.body.Type +"', " +
				"TypeOfMachine = '" + req.body.TypeOfMachine +"', " +
				"Year = '" + req.body.Year +"'" +
				"where DeviceID = '" + req.body.UDID + "'";
	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			updateResourceTable(req.body.ActivationDate,
						   req.body.ExpiryDate,
						   req.body.RegulationValueOne,
						   req.body.RegulationValueTwo,req.body.UserID);
			return res.json(result);
		}
	});
}

function updateResourceTable(AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID){
	var query = "update tblResourcetable set ExpiryDate = '" + ExpiryDate + "'," +
				"AllocationDate = '" + AllocationDate + "'," +
				"RegulationValueOne = '" + RegulationValueOne + "'," +
				"RegulationValueTwo = '" + RegulationValueTwo + "' " +
				"where UserID = '" + UserID + "'";



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

device.prototype.saveMachineDetails = function(req,res){
	console.log(req.body);
	var query = "insert into tblDevice(UDID,WRSNo,ActivationDate,isActive) values('" +
				      req.body.UDID + "'," +
				"'" + req.body.WRSNo + "'," +
				"'" + req.body.ActivationDate + "'," +
					+ 1 +
				")";
	console.log(query);
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			console.log(req.body.ActivationDate);
			console.log(req.body.ExpiryDate);
			AddMachineDtls(req.body.UDID,req.body.EngineNumber,req.body.MachineNumber,req.body.Make,req.body.Model,req.body.RFID,req.body.Type,req.body.TypeOfMachine,req.body.Year,
						   req.body.ActivationDate,
						   req.body.ExpiryDate,
						   req.body.RegulationValueOne,
						   req.body.RegulationValueTwo,
						   req.body.UserID,
						   req.body.WRSNo,
						   req.body.UDID);
			return res.json(result);
		}
	});
}

function AddMachineDtls(UDID,EngineNumber,MachineNumber,Make,Model,RFID,Type,TypeOfMachine,Year,AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID,WRSNo,DeviceUDID){
	var query = "insert into tblmachinedetails(DeviceID,EngineNumber,MachineNumber,Make,Model,RFID,Type,TypeOfMachine,Year) values(" +
				"'" + UDID + "'," +
				"'" + EngineNumber + "'," +
				"'" + MachineNumber + "'," +
				"'" + Make + "'," +
				"'" + Model + "'," +
				"'" + RFID + "'," +
				"'" + Type + "'," +
				"'" + TypeOfMachine + "'," +
				"'" + Year + "'" + 
				")";

	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			AddRenewalDtls(AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID,WRSNo,DeviceUDID);
			console.log(result.insertId);
		}
	});

}


function AddRenewalDtls(AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID,WRSNo,DeviceUDID){
	var query = "insert into tblResourcetable(AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID,WRSNo,DeviceUDID) values(" +
				"'" + AllocationDate + "'," +
				"'" + ExpiryDate + "'," +
				"'" + RegulationValueOne + "'," +
				"'" + RegulationValueTwo + "'," +
				"'" + UserID + "'," +
				"'" + WRSNo + "'," +
				"'" + DeviceUDID + "'" +
				")";
	connection.query(query,function(err,result){
		if(err)
		{
			console.log(err);
		}
		else
		{
			//AddRenewalDtls(AllocationDate,ExpiryDate,RegulationValueOne,RegulationValueTwo,UserID,WRSNo);
			//return res.json(result);
			console.log(result.insertId);
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

device.prototype.checkDeviceStatus = function(req,res){
	var query = "select count(*) from tblDevice where UDID = '" + req.body.DeviceUDID + "'";
	console.log(query);
	connection.query(query,function(err,result){
		if(err){
			console.log(err);
		}
		else
		{
			return res.json(result);
		}
	});
}

module.exports = new device();