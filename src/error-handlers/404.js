"use strict";
function notFound(req,res,next){
res.status(404).send({
    code:404,
    route:req.path,
    message: "page not Found"
}) 
}
module.exports=notFound;