import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return <main>
    <section className="quiz quiz-small">
      <form action="" className="setup-form">

        <div className="form-control">
          <label htmlFor="" className="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className='form-input'
            min={1}
            max={50} />
        </div>

        <div className="form-control">
          <label htmlFor="category">category</label>
          <select name="category" id="category" className='form-input' value={quiz.category} onChange={handleChange} >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="difficulty">difficulty</label>
          <select name="difficulty" id="difficulty" className='form-input' value={quiz.difficulty} onChange={handleChange} >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {error && <p className='error'>Can't generate questions</p>}
        <button type='submit' className='submit-btn' onClick={handleSubmit}>Start</button>
      </form>
    </section>
  </main>
}

export default SetupForm
