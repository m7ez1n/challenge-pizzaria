const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const OrderSchema = new mongoose.Schema({
  items: {
    type: Array,
    require: true
  }
})

OrderSchema.plugin(mongoosePaginate)

module.exports = mongoose.model('Order', OrderSchema)
