const connection = require('../database/connection')

module. exports = {
  async index(request, response) {
    const { page = 1 } = request.query

    const questions = await connection('question')
    .limit(10)
    .orderBy('id', 'desc')
    .offset((page - 1) * 10)
    .select('*')

    return response.json(questions)
  },

  async create(request, response) {
    const { text, user } = request.body
    const [id] = await connection('question').insert({text, user})

    return response.json({ id })
  },

  async questionWithAnswers(request, response) {
    const { id } = request.params
    
    const question = await connection('question')
    .where('id', id)
    .select('*')
    
    const answers = await connection('answers')
      .where('question_id', id)
      .select('*')

      const result = {question, answers: answers}

    return response.json(result)
  }
}