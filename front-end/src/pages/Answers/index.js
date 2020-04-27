import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Answers() {
  const [answers, setAnswers] = useState([])
  const { id } = useParams()

  useEffect(() => {
    api.get(`answers/${id}`)
  }).then(response => {
    setAnswers(response.data)
  })

  return(
    <div>
      <header>
        <span>Olá reponda a Pergunta</span>
        <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
      </header>

  <h1>{answers.text}</h1>
      <ul>
        {answers.map(answer => (
          <li key={answer.id}>
            <strong>Pergunta:</strong>
            <p>{answer.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
