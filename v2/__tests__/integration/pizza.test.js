import request from 'supertest';
import app from '../../src/app';

describe('Pizza', () => {
  it('should be able register one pizza', async () => {
    const response = await request(app)
      .post('/api/pizzas')
      .send({
        name: 'Bufala',
        price: 29.9,
        ingredients: 'tomato, mozarella di bufala',
      });

    expect(response.body).toHaveProperty('id');
  });
});
