import { Router } from 'express';

import PizzaController from './app/controllers/PizzaController';
import OrderController from './app/controllers/OrderController';

const routes = new Router();

routes.get('/api/pizzas', PizzaController.index);
routes.post('/api/pizzas', PizzaController.store);

routes.get('/api/order', OrderController.index);
routes.get('/api/order/:id', OrderController.show);
routes.post('/api/order', OrderController.store);

export default routes;
