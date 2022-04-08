import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id != id);
    setTours(newTours);

  }
  const fetchTours = async () => {
    setIsLoading(true); // extra precaution

    try {
      const res = await fetch(url);
      const tours = await res.json();
      setTours(tours);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours(); // async
  }, []); // only run once

  if (tours.length == 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>Fetch</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      {isLoading ? <Loading /> : <Tours tours={tours} removeTour={removeTour} />}
    </main>
  )
}

export default App
