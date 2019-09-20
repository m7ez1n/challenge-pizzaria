import request from 'supertest';
import app from '../../src/app';

describe('Pizza', () => {
  it('Testing method get in pizza', async () => {
    const response = await request(app).get('/api/pizzas');

    expect(response.status).toBe(200);
  });
});
