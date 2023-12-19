const db = require('./db');
const User = require('./models/User');
const users = require('./dummy.json');

async function main(){
    try{
        const conn =  await db()
        users.forEach(async (user)=>{
            return await User.create(user)
        })
        console.log("users upladed");
    }
    catch(err){
        console.error(err);
    }
    
}

main()