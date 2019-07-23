const OrderItem = require('../models/OrderItem')

class OrderController {
  async index (req, res) {
    const orders = await OrderItem.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 20,
        sort: '-createAt'
      }
    )

    return res.json(orders)
  }

  async show (req, res) {
    const orderItem = await OrderItem.findById(req.params.id)

    return res.json(orderItem)
  }

  async store (req, res) {
    const item = await OrderItem.create(req.body)

    return res.json(item)
  }

  async update (req, res) {
    const item = await OrderItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(item)
  }

  async destroy (req, res) {
    await OrderItem.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new OrderController()
