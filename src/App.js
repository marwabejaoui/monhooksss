
import MovieListe from './component/MovieListe';
import React, {useState} from 'react';
import './App.css';
import { movieData } from './component/MovieData';
import AddMovie from './component/AddMovie/AddMovie';
import SearchMovie from './component/SearchMovie/SearchMovie';
import {  Route } from 'react-router-dom'
import Details from "./component/Details"

function App() {
  const [movies, setMovies] = useState(movieData);
  const [namesearch, setNameSearch] = useState('');
  const [RatingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMovies([...movies, newMovie]);
  };
  
  return (
    <div className="App">
      <SearchMovie setNameSearch={setNameSearch}
        RatingSearch={RatingSearch}
        setRatingSearch={setRatingSearch} />
     
      <MovieListe movies={movies}
        namesearch={namesearch}
        RatingSearch={RatingSearch}
        />
       
      <AddMovie addNewMovie={addNewMovie} />
      <Route path='/'  />
      <Route path='/details/:movieId' > <Details movies={movies}/> </Route>

      
    </div>
  );
}

export default App;
