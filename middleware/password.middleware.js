const verify_password = (req, res, next)=>{
    // check if the password contains: 1 special character, 1 number and is length >= 8
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(.{8,})$/;
    if(!passwordRegex.test(req.body.password)){
        res
        .status(400)
        .json({msg:"password does not meet minimum security requirement"})
    }else{
        next()
    }
}

module.exports = verify_password