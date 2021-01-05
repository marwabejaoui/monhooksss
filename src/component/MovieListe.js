import React from 'react';
import MovieCard from './MovieCard/MovieCard';

const MovieListe = ({ movies, nameSearch, ratingSearch }) => {
    return (
        <div className="movieliste"
        >
            {movies
                .filter(
                    (el) => console.log(el)
                   
                        el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
                        el.rating >= ratingSearch
                )
                .map((el, i) => (
                    <MovieCard key={i} movie={el} />
                ))}
        </div>
    );
};
export default MovieListe;
