import React, { useState, useEffect } from 'react';
import { questions } from '../../utils/quizUtils';
import { Button, Radio, RadioGroup, FormControlLabel, Modal } from '@mui/material';

import { useNavigate } from "react-router-dom";
import './Quiz.css';

const Quiz: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [quizIndex, setQuizIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedOptions = JSON.parse(localStorage.getItem('selectedOptions') || 'null');
    if (savedOptions) {
      setSelectedOptions(savedOptions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [selectedOptions]);

  const handleOptionSelect = (option: string) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[quizIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  const currentQuiz = questions[quizIndex];

  const nextPageText: string = quizIndex === questions.length - 1 ? 'Finalizar' : 'Siguiente';

  const handleNextButtonClick = () => {
    if (quizIndex === questions.length - 1) {
      setIsModalOpen(true);
    } else {
      setQuizIndex(quizIndex + 1);
    }
  };

  const nextPageButtonStyles = quizIndex === questions.length - 1 ? { backgroundColor: '#cc4231', color: '#FFFFFF', minWidth: '20vh' } : { backgroundColor: '#46b80d', color: '#FFFFFF', minWidth: '20vh' }

  const navigate = useNavigate();

  
  return (
    <div id='quiz-container'>
      <p id='question-text'>{currentQuiz.questionText}</p>
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        id="optionsQuiz"
      >
        {currentQuiz.options.map((e, i) => (
          <FormControlLabel
            key={i}
            value={e}
            control={<Radio />}
            label={e}
            checked={selectedOptions[quizIndex] === e}
            onChange={() => handleOptionSelect(e)}
            style={{ marginBottom: '1rem', color: '#555' }}
          />
        ))}
      </RadioGroup>
      <div id="buttonsQuiz">
        <Button
          variant="contained"
          style={{ backgroundColor: '#cc4231', color: '#FFFFFF', minWidth: '20vh' }}
          onClick={() => setQuizIndex(quizIndex - 1)}
          disabled={quizIndex === 0}
        >
          Atrás
        </Button>
        <Button
          variant="contained"
          style={nextPageButtonStyles}
          onClick={handleNextButtonClick}
        >
          {nextPageText}
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div id="modal-content">
          <p>¿Estás seguro/a de que quieres finalizar el cuestionario? No podrás volver a realizarlo nunca más (eso es mucho tiempo)</p>
          <div id='modalButtonContent'>
            <Button variant="contained" onClick={() => setIsModalOpen(false)}>Volver</Button>
            <Button variant="contained" onClick={() => navigate('/results')}>Finalizar</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Quiz;
