import Pizza from '../models/Pizza';

class PizzaController {
  async store(req, res) {
    const pizza = await Pizza.create(req.body);

    return res.json(pizza);
  }
}

export default new PizzaController();
