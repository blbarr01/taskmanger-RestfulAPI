const express = require('express');
const auth = require('../controllers/auth') 
const router = express.Router()

const auth_controller = new auth()

router.get('/login', (req, res)=>{

})
.post('/login', auth_controller.login)

.post('/register', auth_controller.register)


module.exports=router
