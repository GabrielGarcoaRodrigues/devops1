const request = require('supertest');
const app = require('../../src/index');

describe('App Routes', () => {
  test('GET / should return app info', async () => {
    const response = await request(app)
      .get('/')
      .expect(200);

    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toContain('DevOps Demo App');
  });

  test('GET /api/status should return status info', async () => {
    const response = await request(app)
      .get('/api/status')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('memory');
  });

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app)
      .get('/nonexistent')
      .expect(404);

    expect(response.body).toHaveProperty('error');
  });
});
