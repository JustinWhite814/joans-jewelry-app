const mongoose = require('mongoose')

const jewelrySchema = new mongoose.Schema({
  title: {type:String, required: true},
  price: {type:Number},
  category: {type: String},
  availability: {type: String},
  image: {type: String}
})


module.exports = mongoose.model("Jewel", jewelrySchema)
