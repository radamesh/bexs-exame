const request = require('supertest')
const app = require('../../app')
//const connection

describe('Answers', () => {
  it('this test create a new answer to questions', async () => {
    const response = await request(app)
      .post('/answers/create')
      .send({
        question_id: "1",
        text: "My test Answers about good things",
	      user: "Francisco Answers teste"
      })
    
    expect(response.body).toHaveProperty('id')
  })
})