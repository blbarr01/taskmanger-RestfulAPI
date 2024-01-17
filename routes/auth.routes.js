const express = require('express');
const auth = require('../controllers/auth.controller') 
const verify_password = require("../middleware/password.middleware")
const verify_email = require("../middleware/email.middleware")

const router = express.Router()
const auth_controller = new auth()
//group middleware
const data_verification = [verify_email, verify_password];

router
.post('/login', auth_controller.login)
.post('/register', data_verification, auth_controller.register)


module.exports=router
