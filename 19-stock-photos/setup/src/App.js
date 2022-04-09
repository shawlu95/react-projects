import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchImages = async () => {
    let url;
    url = `${mainUrl}${clientID}`;
    try {
      const resposne = await fetch(url);
      const data = await resposne.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  useEffect(() => {
    fetchImages();
  }, []);

  return <main>
    <section className="search">
      <form action="" className="search-form">
        <input type="text" placeholder='search' className="form-input" />
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
