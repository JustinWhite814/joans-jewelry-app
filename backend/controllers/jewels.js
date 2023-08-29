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

router.put('/:id', (req, res) => {
    db.Jewel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    )
    .then(jewel => res.json(jewel))
})

router.delete('/:id', (req, res)=> {
    console.log('I got hit')
    db.Jewel.findByIdAndRemove(req.params.id)
        .then(()=> res.json({ deletedJewelId : req.params.id }))
})

module.exports = router