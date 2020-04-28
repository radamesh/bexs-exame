const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')
const routes = express.Router()

const QuestionController = require('./controllers/QuestionController')
const AnswersController = require('./controllers/AnswersController')
const UsersController = require('./controllers/UsersController')

routes.get('/questions', QuestionController.index)
routes.post('/question/create', celebrate({
  [Segments.BODY]: Joi.object().keys({
    text: Joi.string().required(),
    user: Joi.string().required(),
  })
}), QuestionController.create)
routes.get('/answers/:id', QuestionController.questionWithAnswers)

routes.post('/answers/create', celebrate({
  [Segments.BODY]: Joi.object().keys({
    text: Joi.string().required(),
    user: Joi.string().required(),
    question_id: Joi.string().required(),
  })
}), AnswersController.create)

routes.get('/user', UsersController.index)
routes.post('/user/create', UsersController.create)

module.exports = routes