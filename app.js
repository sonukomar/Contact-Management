  /*
  @ Module name       -
  @ Author            -
  @ Creation Date     -
  @ Modification Date -
  */

  /* Importing all the required modules */
  var express = require('express');
  var app = express();

  /* Setting path for static files */
  app.use('/static', express.static('static'));

  /* Home page routing defination */
  app.get('', function (req, res) {

     console.log("Serving:"+ __dirname + "/" + "templates"+"/"+"index.html");
     res.sendFile( __dirname + "/" + "templates"+"/"+"index.html" );
  })

  /* Dashboard page routing defination */
  app.post('/dashboard', function (req, res) {
      console.log(req);
      console.log("Serving:"+ __dirname + "/" + "templates"+"/"+"dashboard.html" );
      res.sendFile( __dirname + "/" + "templates"+"/"+"dashboard.html" );
  })

  /* add new user defination */
  app.get('/add_new_contact', function (req, res) {

     console.log(req);
    //  res.sendFile( __dirname + "/" + "templates"+"/"+"dashboard.html" );
    res.send("Successfully added ")
  })



  /* function to handle form submition */
  app.get('/login', function (req, res) {

     // Prepare output in JSON format
     response = {
         first_name:req.query.first_name,
         last_name:req.query.last_name
     };
     console.log(response);
     res.end(JSON.stringify(response));
  })


  /* Adding listener to the server */
  var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)

  })
