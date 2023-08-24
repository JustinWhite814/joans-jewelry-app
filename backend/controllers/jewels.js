const express = require('express')

const router = express.Router()

const db = require('../models')


router.get('/', (req, res)=> {
    console.log('I am here')
    db.Jewel.find({})
        .then(jewels => res.json(jewels))
})



module.exports = router