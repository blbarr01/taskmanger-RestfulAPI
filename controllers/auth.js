const bcrypt = require('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function authenticate(pw, challenge){
  const res = await bcrypt.compare(challenge, pw)
  return res
}



class auth_controller{

  async register(req,res){
      let user = req.body
      try {
        await User.create(user)
        res.status(201)
        .send({"status": "resource successfully created"})
      } catch (error) {
        console.error(error);
      }
        
    }

  async login(req, res){
    let user = req.body
    let challenge = user.password;
    
    try {
      let db_res = await User.findOne({email:user.email}).exec()
      let verified = await authenticate(db_res.password, challenge)
      if (verified == true){
        console.log('successful auth');
        let token = jwt.sign(db_res.toJSON(), process.env.JWT_SK)
        res.status(200)
        .cookie('access_token', `Bearer ${token}`, {
          httpOnly:true,
          expires: new Date(Date.now() + 60000) 
          })
        .json({
          msg: "login successful",
          redirect: '/tasks/'
        })

      }else{
        res.
        status(400).
        send({
          msg: "incorrect user credentials"
        })
      }
    } catch (error) {
      console.error(error);
      res.
      status(500).
      json({msg:"there was an error on the server"})
    }

  }

}


async function main(){
    let pw = "password"
    const res = await hashPassword(pw)
    await authenticate(res, pw)
}

module.exports = auth_controller
