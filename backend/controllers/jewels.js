const express = require('express')

const router = express.Router()

const db = require('../models')


router.get('/', (req, res)=> {
    db.Jewel.find({})
        .then(jewels => res.json(jewels))
})

router.post('/', (req, res) => {
    db.Jewel.create(req.body)
        .then(jewels => res.json(jewels))
})

module.exports = router