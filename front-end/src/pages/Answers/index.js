import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Answers() {
  const [answers, setAnswers] = useState([])
  const [question, setQuestion] = useState([])
  const { id } = useParams()
  //const history = useHistory()

  const [text, setText] = useState('')
  const [user] = useState('guilherme silva')
  const [question_id] = useState(id)

  async function saveAnswers(e) {
    e.preventDefault();

    const data = {text, user, question_id}
    try {
      await api.post('answers/create', data)
      alert(`Sua resposta foi salvo com sucesso!`)
      //history.push(`/answers/${id}`)
      window.location.reload(true)
    } catch (error) {
      alert('Não foi possivel salvar sua resposta.')
    }
  }

  useEffect(() => {
    api.get(`answers/${id}`)
      .then(response => {
        setAnswers(response.data.answers)
        setQuestion(response.data.question)
      })
  }, [])

  return(
    <div className="container">
      <header>
        <span>Olá reponda a Pergunta</span>
        <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
        </Link>
      </header>

      <h1>{question.map(q => (q.text))}</h1>

      <form onSubmit={saveAnswers}>
        <textarea
          placeholder="Responder pergunts ..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button className="button" type="submit">Responder</button>
      </form>

      <h2>Respostas</h2>

      <ul>
        {answers.map(answer => (
          <li key={answer.id}>
            <h3>{answer.text}</h3>
            <p>{answer.user}</p>
            <p>{answer.createDate}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}