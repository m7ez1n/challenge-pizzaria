import { Router } from 'express';

import PizzaController from './app/controllers/PizzaController';

const routes = new Router();

routes.post('/api/pizzas', PizzaController.store);

export default routes;
