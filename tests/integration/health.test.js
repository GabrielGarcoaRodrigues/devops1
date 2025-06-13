const request = require('supertest');
const app = require('../../src/index');

describe('Health Check', () => {
  test('GET /health should return health status', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body).toHaveProperty('status', 'UP');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
    expect(response.body).toHaveProperty('checks');
    expect(response.body.checks).toHaveProperty('memory');
  });

  test('Health check should include service info', async () => {
    const response = await request(app)
      .get('/health')
      .expect(200);

    expect(response.body).toHaveProperty('service', 'devops-demo-app');
    expect(response.body).toHaveProperty('version');
    expect(response.body).toHaveProperty('environment');
  });
});
