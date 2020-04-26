const express = require('express')

const routes = express.Router()

const QuestionController = require('./controllers/QuestionController')
const AnswersController = require('./controllers/AnswersController')

routes.get('/', QuestionController.index)
routes.post('/question/create', QuestionController.create)

routes.get('/answers', AnswersController.index)

module.exports = routes