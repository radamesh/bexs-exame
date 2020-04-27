const connection = require('../database/connection')

module. exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const questions = await connection('question')
    .limit(10)
    .offset((page - 1) * 10)
    .select('*')

    return response.json(questions)
  },

  async create(request, response) {
    const { text, user } = request.body
    const [id] = await connection('question').insert({text, user})

    return response.json({ id })
  }
}