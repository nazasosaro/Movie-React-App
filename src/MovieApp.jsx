import { useState } from "react";
import "./MovieApp.css";

export const MovieApp = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState(null);

  const urlBase = "";
  const API_KEY = "";

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const fetchMovies = async () => {
    try {
        const response = await fetch(`${urlBase}?query=${search}&api_key=${API_KEY}`)
        const data = await response.json()
        setMovieList(data.results)
        console.log(data.results);
    } catch (error) {
        console.error('Message error: ', error)
    }
  }
  
  return (
    <>
      <div className="container">
        <h1>Searching a movie</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search a movie"
            name=""
            id=""
            value={search}
            onChange={handleInputChange}
          />

          <button>Search</button>

          {movieList && 
            <div className="movie-list">
              {movieList.map(movie =>{
                <div key={movie.id} className="movie-card">
                  <img src={`${movie.poster_path}`} alt={movie.title} />
                  <h2>{movie.title}</h2>
                  <p>{movie.overview}</p>
                </div>
              })}
            </div>
          }
        </form>
      </div>
    </>
  );
};
