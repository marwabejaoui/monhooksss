import React from 'react';
import MovieCard from './MovieCard/MovieCard';

const MovieListe = ({ movies, namesearch, RatingSearch }) => {
    return (
        <div className="movieliste"
        >
            {movies
                .filter(
                    (el) => 
                    el.name.toLowerCase().includes(namesearch.toLowerCase().trim())  && el.rating >= RatingSearch )
                   . map((el, i) => (
                    <MovieCard key={i} movie={el} />
                   ))}
            
        </div>
    );
};
export default MovieListe;
