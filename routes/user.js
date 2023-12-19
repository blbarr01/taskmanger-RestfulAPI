const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page routes
router.get('/', (req, res) => {
  res.send('user home page')
})
.post('/', (req,res)=>{
    console.log(req.body);
    res.send("new bird added")
})


module.exports = router