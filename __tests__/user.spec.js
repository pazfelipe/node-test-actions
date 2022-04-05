const server = require('../app/app');
const supertest = require('supertest');

describe('API', () => {
  let app;

  beforeAll(() => {
    app = server.listen(3010, () => console.log('API running on test enviroinment'));
  });

  afterAll(() => {
    app.close();
  });

  it('should return status 200 in the first test', async () => {
    await supertest(app)
      .get('/')
      .expect(200);

  });

  it('should fail in the second test', async () => {
    await supertest(app)
      .get('/')
      .expect(400);

  });
});