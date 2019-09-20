import Pizza from '../models/Pizza';

class PizzaController {
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
