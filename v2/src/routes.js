import { Router } from 'express';

import PizzaController from './app/controllers/PizzaController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.get('/api/pizzas', PizzaController.index);
routes.post('/api/pizzas', PizzaController.store);

routes.post('/api/order', OrderController.store);

export default routes;
