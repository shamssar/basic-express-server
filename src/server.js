'use strict';
const express = require('express');

const app = express();

const serverError=require("./error-handlers/500") ;
const notFound= require("./error-handlers/404");
const methodAndPath= require("./middleware/logger");
const validator= require("./middleware/validator");

app.use(methodAndPath);

app.get("/",(req,res)=>{
res.send("Welcom to Home page")
})

app.get("/person",validator,(req,res)=>{
    res.json({
 
        name:req.query.name,
    } )
})



app.get('/bad', (req, res) => {
    let num = 10;
    let result = num.forEach((x) => {
        console.log(x);
    });
    res.status(500).send(result);

})




function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}

app.use(serverError);
app.use("*",notFound);

module.exports = {
    app: app,
    start: start,
}