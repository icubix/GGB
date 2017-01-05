var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var master = require('./server/masterRouter.js');

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('app'));

app.use('/master',master);


app.get('/',function(req,res)
{
  console.log(__dirname);
  res.sendfile(__dirname + '/app/index.html');
});


app.set('port',process.env.PORT || 2424);

var server = app.listen(app.get('port'),function(){
	console.log('Listening port' + server.address().port);

});
