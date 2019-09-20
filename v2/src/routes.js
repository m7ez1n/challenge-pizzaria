import { Router } from 'express';

import PizzaController from './app/controllers/PizzaController';

const routes = new Router();

routes.get('/api/pizzas', PizzaController.index);
routes.post('/api/pizzas', PizzaController.store);

export default routes;
