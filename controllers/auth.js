const bcrypt = require('bcrypt')
const User = require('../models/User');


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
        console.log(req.body);
        res.send({
          msg: 'login attempt made'
        })
      }

}


async function main(){
    let pw = "password"
    const res = await hashPassword(pw)
    await authenticate(res, pw)
}

module.exports = auth_controller
