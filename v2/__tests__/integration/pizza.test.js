import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('Pizza', () => {
  beforeEach(async () => {
    await truncate();
  });

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

  it('should not be able to register with duplicated pizza name', async () => {
    await request(app)
      .post('/api/pizzas')
      .send({
        name: 'Bufala',
        price: 29.9,
        ingredients: 'tomato, mozarella di bufala',
      });

    const response = await request(app)
      .post('/api/pizzas')
      .send({
        name: 'Bufala',
        price: 29.9,
        ingredients: 'tomato, mozarella di bufala',
      });

    expect(response.status).toBe(400);
  });
});
