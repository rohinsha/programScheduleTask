//Install express server
const express = require('express');
const path = require('path');
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/programScheduleTask'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/programScheduleTask/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);