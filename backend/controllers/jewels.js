const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/', async (req, res)=> {
   await db.Jewel.find({})
        .then(jewels => res.json(jewels))
})

router.get('/:id', async (req, res) => {
  await db.Jewel.findOne({ _id: req.params.id })
      .then(jewel => res.json(jewel))
  });

router.get('/category/:category', async (req, res) => {
    const category = req.params.category;
  
    try {
      // Find jewels with the specified category
      const jewels = await db.Jewel.find({ category });
      res.json(jewels);
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });

 
 

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
    .then(jewel => {
      res.json(jewel)})
})
  

router.delete('/:id', (req, res)=> {
    db.Jewel.findByIdAndRemove(req.params.id)
        .then(()=> res.json({ deletedJewelId : req.params.id }))
})

module.exports = router