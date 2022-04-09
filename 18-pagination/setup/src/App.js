import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setFollowers(data[page]);
      console.log(data[page])
    }
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index)
  };

  return <main>
    <div className="section-title">
      <h1>{loading ? "loading..." : "pagination"}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />
        })}
      </div>
      {!loading && <div className="btn-container">
        {data.map((_, index) => {
          return <button
            key={index}
            className={`page-btn ${page == index && 'active-btn'}`}
            onClick={() => handlePage(index)}
          >{index + 1}</button>
        })}
      </div>}
    </section>
  </main>
}

export default App
