import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0); // start with first person
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    })
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    })
  };

  const checkNumber = (number) => {
    return Math.min(people.length - 1, Math.max(0, number));
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);

    // enforce change
    if (randomNumber == index) {
      randomNumber++;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">{name}</div>
      <p className="job">{job}</p>
      <div className="button-container">
        <button className='next-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='prev-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
