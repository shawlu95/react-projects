import React from 'react'
import { useGlobalContext } from './context'

import SetupForm from './SetupForm'
import Loading from './Loading'
import Modal from './Modal'
function App() {
  const {
    waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

  if (waiting) {
    return <SetupForm />
  }

  if (loading) {
    return <Loading />
  }
  console.log(questions[0])
  const { question, incorrect_answers, correct_answer } = questions[index];
  const answers = [...incorrect_answers, correct_answer];
  return <main>
    <Modal />
    <section className="quiz">
      <p className="correct-answers">
        correct answer: {correct} / {index}
      </p>
      <article className="container">
        <h2 dangerouslySetInnerHTML={{ __html: question }} />
        <div className='btn-container'>
          {answers.map((answer, index) => {
            return <button
              key={index}
              className='answer-btn'
              onClick={() => checkAnswer(correct_answer === answer)}
              dangerouslySetInnerHTML={{ __html: answer }}></button>
          })}
        </div>
      </article>
      <button className="next-question" onClick={nextQuestion}>Next Question</button>
    </section>
  </main>
}

export default App
