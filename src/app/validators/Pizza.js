const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string().required(),
    price: Joi.number().required(),
    ingredients: Joi.array().required()
  }
}
