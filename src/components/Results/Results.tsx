import React from 'react';
import './Results.css';
import { questions } from '../../utils/quizUtils';

const Results: React.FC = () => {
  const localStorageValue = localStorage.getItem('selectedOptions');
  const parsedValues = localStorageValue ? JSON.parse(localStorageValue) : [];

  let puntaje = 0;

  const questionResults = questions.map((question, index) => {
    const isCorrect = question.correctOption === parsedValues[index];
    if (isCorrect) {
      puntaje++;
    }
    return (
      <div className={isCorrect ? 'result correct' : 'result incorrect'} key={index}>
        <p>Pregunta {index + 1}: {isCorrect ? 'Correcta' : 'Incorrecta'}</p>
      </div>
    );
  });

  return (
    <div className="results-container">
      <h2>Tu puntaje es: <span className="score">{puntaje}/12</span></h2>
      <div className="question-results">
        {questionResults}
      </div>
    </div>
  );
};

export default Results;
