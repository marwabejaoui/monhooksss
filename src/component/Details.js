import React from 'react'
import { useParams } from 'react-router-dom'
import { movieData } from './MovieData';

const Details = () => {
    const { movieId } = useParams();
    const data = movieData.find(movie=>movie.id==movieId)
    return (
        
        <div>
            <h1>{data.name}</h1>
            <h2>DESCRIPTION</h2>
            <h2>{data.description }</h2>
        </div>
    )
}

export default Details
