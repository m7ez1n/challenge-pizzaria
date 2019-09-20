import Pizza from '../models/Pizza';

class PizzaController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const pizzas = await Pizza.findAll({
      order: ['name'],
      limit: 10,
      offset: (page - 1) * 10,
      attributes: ['name', 'price', 'ingredients'],
    });

    return res.json(pizzas);
  }

  async store(req, res) {
    const { name } = req.body;

    const checkName = await Pizza.findOne({ where: { name } });

    if (checkName) {
      return res.status(400).json({ error: 'Duplicated name' });
    }

    const pizza = await Pizza.create(req.body);

    return res.json(pizza);
  }
}

export default new PizzaController();
