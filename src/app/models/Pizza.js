const mongoose = require('mongoose')
const monogoosePaginate = require('mongoose-paginate')

const PizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ingredients: {
    type: Array,
    required: true
  }
})

PizzaSchema.plugin(monogoosePaginate)

module.exports = mongoose.model('Pizza', PizzaSchema)
