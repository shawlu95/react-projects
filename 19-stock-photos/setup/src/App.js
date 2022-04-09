import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState('');

  const fetchImages = async () => {
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;

    if (query) {
      url = `${searchUrl}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientID}${urlPage}`;
    }

    try {
      const resposne = await fetch(url);
      const data = await resposne.json();
      setPhotos((oldPhotos) => {
        if (query && page === 1) {
          return data.results;
        } else if (query) {
          return [...oldPhotos, ...data.results];
        } else {
          return [...oldPhotos, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search", query);
    setPage(1);
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      // console.log(`innerHeight ${window.innerHeight}`); // height of window
      // console.log(`scrollY ${window.scrollY}`); // Y position of window top
      // console.log(`body height ${document.body.scrollHeight}`); // height of entire page content
      if (!loading && window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 2) {
        setLoading(true);
        console.log('Fetch more images');
        setPage((oldPage) => {
          return oldPage + 1;
        })
      }
    });
    return () => window.removeEventListener('scroll', event);
    // eslint-disable-next-line
  }, []);
  return <main>
    <section className="search">
      <form action="" className="search-form">
        <input type="text" placeholder='search' className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        <button className="submit-btn" type='submit' onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </section>
    <section className="photos">
      <div className="photos-center">
        {photos.map((image, index) => {
          return <Photo key={image.id} {...image} />
        })}
      </div>
      {loading && <h2 className='loading'>Loading...</h2>}
    </section>
  </main>
}

export default App
