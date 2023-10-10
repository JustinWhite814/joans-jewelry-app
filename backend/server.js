// declarations
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const db = require('./models')

const jewelControl = require('./controllers/jewels')
// create the express app
const app = express()

// Cross origin allowance
app.use(cors())
// this is the new body parser
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// seed route 

app.get('/seed', function (req, res) {
    // Remove any existing jewels in the databse
    db.Jewel.deleteMany({})
        .then(removedJewels => {
            console.log(`Removed ${removedJewels.deletedCount} jewels`)

            // Seed the jewels collection with the seed data
            db.Jewel.insertMany(db.seedJewels)
                .then(addedJewels => {
                    console.log(`Added ${addedJewels.length} jewels to be purchased`)
                    res.json(addedJewels)
                })
        })
});


// This is the mounting route
app.use('/api/jewels', jewelControl)

// Listening on a specific port
app.listen(process.env.PORT, function(){
    console.log('Express is listening to port', process.env.PORT)
})