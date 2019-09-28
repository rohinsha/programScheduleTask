//Install express server
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/programScheduleTask'));
app.get('/*',cors(corsOptions), function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/programScheduleTask/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);