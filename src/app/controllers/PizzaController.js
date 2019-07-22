const Pizza = require('../models/Pizza')

class PizzaController {
  async index (req, res) {
    const pizzas = await Pizza.paginate(
      {},
      {
        page: req.query.page || 1,
        limit: 20
      }
    )

    return res.json(pizzas)
  }

  async store (req, res) {
    const pizza = await Pizza.create(req.body)

    return res.json(pizza)
  }
}

module.exports = new PizzaController()
