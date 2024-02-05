const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const verify_email = (req,res, next) =>{
    let email = req.body.email
    if(!emailRegex.test(email)){
        return res
        .status(400)
        .json({
            "status": "email is not properly formated"
        })
    }
    next()
}

module.exports = verify_email