const request = require('supertest')
const app = require('../../app')
//const connection

describe('Question', () => {
  it('this test create new questions', async () => {
    const response = await request(app)
      .post('/question/create')
      .send({
        text: "My test question about good things",
	      user: "Francisco"
      })
    
    expect(response.body).toHaveProperty('id')
  })
})