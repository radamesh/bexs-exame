const express = require('express')

const routes = express.Router()

const QuestionController = require('./controllers/QuestionController')
const AnswersController = require('./controllers/AnswersController')
const UsersController = require('./controllers/UsersController')

routes.get('/questions', QuestionController.index)
routes.post('/question/create', QuestionController.create)
routes.get('/answers/:id', QuestionController.questionWithAnswers)

routes.post('/answers/create', AnswersController.create)

routes.get('/user', UsersController.index)
routes.post('/user/create', UsersController.create)

module.exports = routes