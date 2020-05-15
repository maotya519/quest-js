var express = require("express");
var app = express();



app.set("view engine", "pug");
app.disable("x-powered-by");


app.use("/public", express.static( __dirname + "/public"));
app.use("/", require("./routes/index.js"));





app.listen( 3000, ()=> { console.log('Server running')});
