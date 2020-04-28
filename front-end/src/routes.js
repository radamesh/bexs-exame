import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//import Login from './pages/Login'
import Question from './pages/Question'
import Answers from './pages/Answers'

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Question} />
        <Route path="/answers/:id" component={Answers} />
      </Switch>
    </BrowserRouter>
  )
}