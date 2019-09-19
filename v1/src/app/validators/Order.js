const Joi = require('joi')

module.exports = {
  body: {
    pizza: Joi.number().required(),
    pizzaName: Joi.string().required(),
    quantity: Joi.number().required()
  }
}
