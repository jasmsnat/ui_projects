var express = require('express'); //express server required
var app = express(); //variable with that function
 
//Hosting static files
app.use(express.static(__dirname + '/'));


/*app.get('/', function(req, res) {
  res.send('Hello World');
});*/
 
//you need at least 1 router - this will be your home page. You can use the 
//send is for string messages. redirect can be used for links
app.get('/', function(req, res) {
    res.redirect('/views/personFinal.html');
})

/*app.get('/landing', function(req, res) {
    res.send('This is from the landing');
});

app.get('/landing/person', function(req, res) {
    res.send('This is from the person landing');
});*/

//hosting port
app.listen(3000, function(req, res) {
    console.log('listening to port 3000');
});