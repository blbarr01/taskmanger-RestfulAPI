const auth = require('./controllers/auth');

async function main() {
    const controller = new auth()
    const {hashPassword,authenticate} = controller
    let hp = await hashPassword("test1234")
    let ver = await authenticate(hp, "test1234")
    console.log(hp);
    console.log(ver);
}

main()