/*
  @ Module name       - Angular Contact Management System
  @ Author            - Sonu Kumar
  @ Creation Date     - 6th July 2016
  @ Modification Date - 7th July 2016
  */

/* Importing all the required modules */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
        extended: false
    })

/* Setting path for static files */
app.use('/static', express.static('static'));


/* Home page routing defination */
app.get('', function(req, res) {
    console.log("* Serving:" + __dirname + "/" + "templates" + "/" + "index.html");
    res.sendFile(__dirname + "/" + "templates" + "/" + "index.html");
})

/* Dashboard page routing defination */
app.get('/dashboard', function(req, res) {
    console.log("* Entered User Email: " + req.query.userEmail);
    console.log("* Entered Password: " + req.query.userPassword);
    if (req.query.userPassword == 'sonu') {
        console.log("* Serving:" + __dirname + "/" + "templates" + "/" + "dashboard.html");
        res.sendFile(__dirname + "/" + "templates" + "/" + "dashboard.html");
    } else {
        console.log("* Invalid Credentials!!");
        res.sendFile(__dirname + "/" + "templates" + "/" + "index.html");
    }

})

/* add new user defination */
app.get('/add_new_contact', urlencodedParser, function(req, res) {
    console.log(req);
    var newContactObj = {

        "name": req.query.contactName,
        "mobile": req.query.contactMobie,
        "phone": req.query.contactPhone,
        "email": req.query.contactEmail,
        "price": "48000"
    }

    //  res.sendFile( __dirname + "/" + "templates"+"/"+"dashboard.html" );
    // res.end(JSON.stringify(newContactObj));
})


/* Adding listener to the server */
var server = app.listen(8081, function() {

    var host = server.address().address
    var port = server.address().port

    /* Information part about the server on the console */ 
    console.log("");
    console.log("=================================================");
    console.log("Contact management system welcomes you, Enjoy!!");
    console.log("=================================================");
    console.log("");
    console.log(" * Contact Management app listening at http://%s:%s ......", host, port)
    /* Information part about the serveer on the console ends */

})
