import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

export default function Question() {
  const [questions, setQuestions] = useState([])
  const [text, setText] = useState('')
  const [user] = useState('guilherme silva')
  const history = useHistory()

  async function saveQuestions(e) {
    e.preventDefault();

    const data = {text, user}
    try {
      const question = await api.post('question/create', data)
      alert(`Sua pergunta foi salvo com sucesso!`)
      window.location.reload(true)
      //history.push('/')
    } catch (error) {
      alert('Não foi possivel salvar sua perguta.')
    }
  }

  function goAnswers(id) {
    history.push(`answers/${id}`)
  }

  useEffect(() => {
    api.get('questions')
      .then(response => {
        setQuestions(response.data)
      })
  }, [])

  return(
    <div className="container">
      <header>
        <span>Bem Vindo!</span>      
      </header>

      <form onSubmit={saveQuestions}>
        <textarea
          placeholder="Cadastre uma nova pergunta ..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="button" type="submit">Perguntar</button>
      </form>

      <h2>Perguntas Cadastradas</h2>

      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <h1>{question.text}</h1>
            <p>{question.user} - {question.createDate}</p>
            <Link className="back-link" onClick={() => goAnswers(question.id)}>
              Responder
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
