/**
 * Created by xunjie on 16/12/27.
 */
var express = require("express");
var app = express();

app.use(express.static('build'));

app.listen(9090);
console.log("Server is running at port: 9090.");
