/**
 * Created by forli on 2017/4/27.
 */
var express = require('express');
var app = express();
app.use('/',express.static(__dirname));
var port = 8008;
app.listen(port,function(){
    console.log("server is running on " + port);
});
