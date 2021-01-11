import React from 'react';

import React from 'react'
import { Router } from 'react-router-dom';
import MovieListe from './component/MovieListe';

const Description = (movies) => {
    return (
        <div className="description">
            
            { movies
                .map((el, i) => (
                <MovieCard key={i} movie={el} />)
            )
            }
            
        </div>
    )
}

export default Description







