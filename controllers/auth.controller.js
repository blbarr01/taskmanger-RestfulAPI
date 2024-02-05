const bcrypt = require('bcrypt')
const User = require('../models/User');
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function authenticate(pw, challenge){
  try {
  const res = await bcrypt.compare(challenge, pw)
  return res   
  } catch (error) {
    return error   
  }

}

class auth_controller{

  async register(req,res){
      let user = req.body
      try {
        const db_res = await User.create(user)
        return res.status(201)
        .send({
          "status": "resource successfully created",
          "redirect": '/dashboard'
        })
      } catch (error) {
        if (error.code === 11000){
          return res.status(403)
          .json({
          "status" : "An account with that email already exists"
          })
        }
      }
    }

  async login(req, res){
    let user = req.body
    let challenge = user.password;
    
    try {
      let db_res = await User.findOne({email:user.email}).exec()
      // if no user is found
      if(!db_res){
        return res.
        status(400).
        json({
          msg: "incorrect user credentials"
        })
        
      }
      
      // if the passwords do not match
      let verified = await authenticate(db_res.password, challenge)
      if (!verified){
        return res.status(400).
        json({
          msg: "incorrect user credentials"
        })
      }

      console.log('successful auth');
      let token = jwt.sign(db_res.toJSON(), process.env.JWT_SK)
      return res.status(200)
      .cookie('access_token', `Bearer ${token}`, {
        httpOnly:true,
        expires: new Date(Date.now() + 60000) 
        })
      .json({
        msg: "login successful",
        redirect: '/dashboard'
        })
      
    } catch (error) {
      console.error(error);
      return res.
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
