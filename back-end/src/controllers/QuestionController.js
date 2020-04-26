const connection = require('../database/connection')

module. exports = {
  async index(request, response) {
    return response.json(true)
  },

  async create(request, response) {
    const { text, user } = request.body
    const [id] = await connection('question').insert({text, user})

    return response.json({ id })
  }
}