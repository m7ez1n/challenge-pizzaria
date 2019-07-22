const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const OrderItemSchema = new mongoose.Schema({
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
})

OrderItemSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('ItemOrder', OrderItemSchema)
