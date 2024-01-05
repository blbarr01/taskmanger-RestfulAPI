require('dotenv').config()
const jwt = require('jsonwebtoken');

const verify_token = (req, res, next) =>{
    const {access_token} = req.cookies
    if (access_token){
        let tk = access_token.split(" ")[1]
        try {
            let decoded = jwt.verify(tk, process.env.JWT_SK)
            console.log(decoded);
            let u_id = decoded._id; 
            console.log("object id: " + u_id);
            res.set('x-id', u_id)
        } catch (error) {
            console.error();
            res.send(new Error('error while parsing token'))
        }
    }

    res.append('x-cookie-status', 'cookies read')
    next()
}

module.exports = verify_token