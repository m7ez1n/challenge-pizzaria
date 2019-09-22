import * as Yup from 'yup';

import Order from '../models/Order';
import Pizza from '../models/Pizza';

class OrderController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const orders = await Order.findAll({
      order: ['created_at'],
      limit: 5,
      offset: (page - 1) * 5,
      attributes: ['id', 'quantity'],
      include: [
        {
          model: Pizza,
          attributes: ['name', 'price', 'ingredients'],
        },
      ],
    });

    return res.json(orders);
  }

  async show(req, res) {
    const order = await Order.findByPk(req.params.id, {
      attributes: ['id', 'quantity'],
      include: [
        {
          model: Pizza,
          attributes: ['name', 'price', 'ingredients'],
        },
      ],
    });

    return res.json(order);
  }

  async store(req, res) {
    const validation = Yup.object().shape({
      pizza_id: Yup.number().required(),
      quantity: Yup.number().required(),
    });

    if (!(await validation.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation error' });
    }

    const order = await Order.create(req.body);

    return res.json(order);
  }
}

export default new OrderController();
