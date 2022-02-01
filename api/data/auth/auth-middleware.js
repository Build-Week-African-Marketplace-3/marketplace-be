//const db = require("../db-config");

const checkPayload = async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    next({ status: 401, message: "username and password are required" });
  } else {
    next();
  }
};
const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../secrets/index')

const restricted = (req,res,next)=>{
    const token = req.headers.authorization
    if(!token){
        return next({ status: 401, message: 'token is required in the headers.authorization'})
    }
    jwt.verify(token, JWT_SECRET, (err, decodedToken)=>{
        if(err){
            next({ 
            status:401,
            message: "Token is Invalid"})}
        else{
            req.decodedToken=decodedToken
            next()
        }
    })
}
module.exports = { checkPayload, restricted };
