import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
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
      alert(`Caro "${question.data.id}" sua pergunta foi salvo com sucesso!`)
      history.push('/')
    } catch (error) {
      alert('Não foi possivel salvar sua perguta.')
    }
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
        />                           <button className="button" type="submit">Cadastrar</button>
      </form>
      <h1>Perguntas Cadastradas</h1>

      <ul>
        {questions.map(question => (
          <li key={question.id}>
            <strong>Pergunta:</strong>
            <p>{question.text}</p>

            <button type="button">
              Ver detalhes
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
