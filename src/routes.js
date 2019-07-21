const express = require('express')

const routes = express.Router()

const PizzaController = require('./app/controllers/PizzaController')
const PizzaValidator = require('./app/validators/Pizza')

module.exports = routes
