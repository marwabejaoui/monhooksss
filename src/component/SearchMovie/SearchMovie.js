import React from 'react';
import './SearchMovie.css';
import Rate from '../Rate';


const SearchMovie = ({ setNameSearch, ratingSearch, setRatingSearch }) => {
    return (
        <div>
            <div className="search">
                <input  type="text"
          placeholder="Type movie name to search"
          onChange={(e) => setNameSearch(e.target.value)}/>
           
            <div className="rating">
            <Rate rating={ratingSearch} setRatingSearch={setRatingSearch} />

                </div>
                </div>
        </div>
    )
}

export default SearchMovie;
