const express = require('express')
const validate = require('express-validation')

const routes = express.Router()

const PizzaController = require('./app/controllers/PizzaController')
const PizzaValidator = require('./app/validators/Pizza')
const OrderController = require('./app/controllers/OrderController')

// CRUD Orders
routes.get('/api/orders', OrderController.index)
routes.get('/api/orders/:id', OrderController.show)
routes.post('/api/orders', OrderController.store)
routes.put('/api/orders/:id', OrderController.update)
routes.delete('/api/orders/:id', OrderController.destroy)

// Pizzas
routes.get('/api/pizzas', PizzaController.index)
routes.post('/api/pizzas', validate(PizzaValidator), PizzaController.store)

module.exports = routes
