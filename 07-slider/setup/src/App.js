import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    // wrap around
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  // auto-play
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    // crucial! clean up old scheduler!
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section'>
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>

      <div className="section-center">
        {people.map((person, i) => {
          const { id, image, name, title, quote } = person;
          let position = 'nextSlide';
          if (i == index) {
            position = 'activeSlide';
          }
          if (i == index - 1 || (index == 0 && i == people.length - 1)) {
            position = 'lastSlide';
          }
          return <article key={id} className={position}>
            <img src={image} alt={name} className='person-img' />
            <h4>{name}</h4>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
          </article>
        })}
        <button className='prev'>
          <FiChevronLeft onClick={() => setIndex(index - 1)} />
        </button>
        <button className='next'>
          <FiChevronRight onClick={() => setIndex(index + 1)} />
        </button>
      </div>
    </section>
  )
}

export default App;
