const bcrypt = require('bcrypt')

async function hashPassword(word){
    try{
        let salt = await bcrypt.genSalt()
        let hash = await bcrypt.hash(word, salt)
        return hash
    }catch(err){
        console.error(err);
    }
}

async function authenticate(pw, challenge){
    const res = await bcrypt.compare(challenge, pw)
    return res
}

async function main(){
    let pw = "password"
    const res = await hashPassword(pw)
    await authenticate(res, pw)
}

module.exports = {hashPassword, authenticate}
