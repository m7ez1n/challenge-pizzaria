const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const OrderItemSchema = new mongoose.Schema({
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pizza',
    required: true
  },
  pizzaName: {
    type: String,
    require: true
  },
  quantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

OrderItemSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('ItemOrder', OrderItemSchema)
