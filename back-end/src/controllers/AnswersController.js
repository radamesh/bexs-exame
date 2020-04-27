const connection = require('../database/connection')

module. exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const questions = await connection('answers')
    .limit(10)
    .offset((page - 1) * 10)
    .select('*')

    return response.json(questions)
  },

  async create(request, response) {
    const { question_id, text, user } = request.body
    const [id] = await connection('answers').insert({question_id, text, user})

    return response.json({ id })
  }
}