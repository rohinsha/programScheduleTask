//Install express server
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
var corsOptions = {
    origin: 'http://api.tvmaze.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/programScheduleTask'));
app.get('/*',cors(corsOptions), function(req,res) {
res.sendFile(path.join(__dirname+'/dist/programScheduleTask/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);