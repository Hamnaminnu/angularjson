const express = require('express');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());
const data1 = require('./data.json');
app.get("/data",(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    var data= JSON.stringify(data1);
    console.log(data);
    res.send(data);
   
});



app.listen(3800, function(){
    console.log('listening to port 3800');
});