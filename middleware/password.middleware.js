const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{8,})$/;

const verify_password = (req, res, next)=>{
    // check if the password contains: 1 special character, 1 number and it's length is >= 8
    if(!passwordRegex.test(req.body.password)){
       return res
        .status(400)
        .json({msg:"password does not meet minimum security requirement"})
    }
    next()
   
}

module.exports = verify_password