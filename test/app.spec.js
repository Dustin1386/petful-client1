const app = require('../src/app')

describe('App', () => {
  it('GET / responds with 200 "Hello From Petful"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello From Petful')
  })
})
