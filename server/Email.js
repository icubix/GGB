var con = require('mysql');

var connection = con.createConnection({
	host:'localhost',
	user: 'root',
	password: '',
	database: 'ggb'
});

connection.connect();

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'Kalidasu.Surada@gmail.com', // Your email id
            pass: 'active@1234$' // Your password
        }
    });

function getUserId(emailAddress,res){

var query = "select * from tblusers where EmailAddress = '" + emailAddress + "'";
connection.query(query,function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
           console.log(result);
            return result;
        }
});
};
// send mail with defined transport object



var Email = function(){};

Email.prototype.sendEmail = function(req,res){
   

    //var result = getUserId(req.body.EmailAddress);
    var query = "select UserID from tblusers where EmailAddress = '" + req.body.EmailAddress + "'";
  //  console.log(UserID);

    connection.query(query,function(err,result){
        if(err)
        {
            console.log(err);
        }
        else
        {
           console.log(result);
            return result;
  

	var text = 'http://localhost:2424/#/reset/ ' +  result.UserID ;

	console.log(req.body.EmailAddress);

	var mailOptions = {
    from: 'Kalidasu.Surada@gmail.com', // sender address
    to: req.body.EmailAddress, // list of receivers
    subject: 'Email Example', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };


	transporter.sendMail(mailOptions, function(error, info){
	    if(error){
	        return console.log(error);
	    }
    	console.log('Message sent: ' + info.response);
	});
  }
 });
    
};





module.exports = new Email();