// where node app starts
var express = require('express');
var app = express();
var multer = require('multer');

//set static
app.use(express.static('public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//route for homepage
app.get('/', function(request, response) {
  response.render('index');
});

// process uploaded file and show size
app.post('/', multer({ dest: './uploads/'}).single('file'), function(req,res){
	var result = {
    "size": req.file.size
  }
  
	res.json(result);
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
