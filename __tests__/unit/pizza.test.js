const request = require('supertest')
const server = require('../../src/server')

const Pizza = require('../../src/app/models/Pizza')

describe('Pizza', () => {
  it('should create new pizza', async () => {
    const pizza = await Pizza.create({
      name: 'Frango com Catupiry',
      price: '29.99',
      ingredients: ['frango', 'catupiry']
    })

    const response = await request(server)
      .post('pizzas')
      .send(pizza)

    expect(response.status).toBe(200)
  })
})
