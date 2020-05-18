const express = require('express')
const router = express.Router()
//api endpoint
router.get('/api',(req,res)=>{
    res.json({msg: 'connected'})
})

//send error msg to invalid routes
router.get('/*',(req,res,err)=>{
    res.status(401).send(`cannot Get .${req.path} \n invalid authorize `)
})

module.exports = router

