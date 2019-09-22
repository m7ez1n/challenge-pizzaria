import * as Yup from 'yup';

import Order from '../models/Order';

class OrderController {
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
