const express = require('express');
const app = express();
const path = require('path');
const PORT = 8080;
const HOST = 'localhost';

app.use(express.static(path.join(__dirname, '../client')));
var port = process.env.PORT || PORT;

app.listen(port, function(){

    console.log("Live on port : " + port);

});