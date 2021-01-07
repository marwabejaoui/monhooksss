
import MovieListe from './component/MovieListe';
import React, {useState} from 'react';
import './App.css';
import { movieData } from './component/MovieData';
import AddMovie from './component/AddMovie/AddMovie';
import SearchMovie from './component/SearchMovie/SearchMovie';

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
            <AddMovie addNewMovie={addNewMovie} />
      <MovieListe movies={movies}
        namesearch={namesearch}
        RatingSearch={RatingSearch}
      />
    </div>
  );
}

export default App;
