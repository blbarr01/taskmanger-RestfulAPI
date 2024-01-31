require('dotenv').config()
const jwt = require('jsonwebtoken');

const verify_token = (req, res, next) =>{
    const {access_token} = req.cookies
    console.log("access token" + access_token);
    if (!access_token){
        res.status(400)
        res.send({msg: "no access token found, you are not allowed"})
   
    }
    
    try {
        let tk = access_token.split(" ")[1]
        let decoded = jwt.verify(tk, process.env.JWT_SK)
        console.log(decoded);
        let u_id = decoded._id; 
        console.log("object id: " + u_id);
        res.set('x-id', u_id)
        res.append('x-cookie-status', 'cookies read')
        next()

    } catch (error) {
        console.error();
        res.send(new Error('error while parsing token'))
    }

}

module.exports = verify_token