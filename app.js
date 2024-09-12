const express = require("express")
const app = express()
require('./DBconnection').connectionDB();
const Port = 3000;
require("./models/index")
app.listen(Port,()=> {
    console.log(`listening at port ${Port}`)
});