const connection = require('../database/connection')

module. exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const questions = await connection('users')
    .limit(10)
    .offset((page - 1) * 10)
    .select('*')

    return response.json(questions)
  },

  async create(request, response) {
    const { name, email, password } = request.body
    const [id] = await connection('users').insert({name, email, password})

    return response.json({ id })
  }
}