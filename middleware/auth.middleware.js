require('dotenv').config()
const jwt = require('jsonwebtoken');

const verify_token = (req, res, next) =>{
    const {access_token} = req.cookies
    //console.log("access token" + access_token);
    // if no token is found return error
    if (!access_token){
        return res
        .status(400)
        .send({msg: "no access token found, you are not allowed"})
    }
   
    // get token, verify signature, append the user_id to the response obj for use in the next "middleware"
    try {
        let tk = access_token.split(" ")[1]
        let decoded = jwt.verify(tk, process.env.JWT_SK)
        console.log(decoded);
        let u_id = decoded._id; 
        res.set('x-id', u_id)
        next()

    } catch (error) {
        console.error(error);
        res.send(new Error('error while parsing token'))
    }

}

module.exports = verify_token