import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'

const table = {
  sports: 21,
  history: 23,
  politics: 24,
}

const API_ENDPOINT = 'https://opentdb.com/api.php?'

const url = ''
const tempUrl = 'https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // display form when waiting
  const [waiting, setWaiting] = useState(true);

  // fetching data
  const [loading, setLoading] = useState(true);

  const [questions, setQuestions] = useState([]);

  // current question
  const [index, setIndex] = useState(0);

  // number of correct answers
  const [correct, setCorrect] = useState(0);

  const [error, setError] = useState({ show: false, msg: '' });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchQuestions = async (url) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch(err => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      }
    } else {
      setWaiting(true);
      setError(true);
    }
    console.log(response);
  };

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1;
      if (index > questions.length - 1) {
        // openModal();
        return 0;
      }
      return index;
    })
  }

  const checkAnswer = value => {
    if (value) {
      setCorrect((oldState) => oldState + 1);
    }
    nextQuestion();
  }

  useEffect(() => {
    fetchQuestions(tempUrl);
  }, []);

  return <AppContext.Provider value={{
    waiting, loading, questions, index, correct, error, isModalOpen, nextQuestion, checkAnswer
  }}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
