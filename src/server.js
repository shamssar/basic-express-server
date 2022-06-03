'use strict';


const express = require('express');
const notFoundHandler = require('../src/error-handlers/404');
const errorHandler = require('../src/error-handlers/500');
const logger = require('../src/middleware/logger');
const validator = require('../src/middleware/validator');

const app = express();

app.use(logger);

app.get("/",(req,res)=>{
res.status(200).send("Welcom to Home page")
})

app.get(`/person`,validator(),(req,res)=>{
    res.status(200).json({
 
        name: `${req.query.name}`,
    } )
    app.get('/bad', (req, res) => {
        let num = 55;
        let result = num.forEach((y) => {
            console.log(y);
        });
        res.status(404).send(result);
    })
})
app.use(errorHandler);
app.use("*",notFoundHandler);



function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}



module.exports = {
    app: app,
    start: start,
}