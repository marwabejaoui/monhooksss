import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';

const MovieCard = ({
    movie :{ name, rating, image, date, type, description },
}) => {
    return (
        <div className="card">
            <div className=" cardimg">
                <img src={image} alt="shark" />
            </div>

            <div className="title">
                <h1>{name}</h1>
            </div>
            <div className="carddetaile">
                <ul>
                    <li> {date}  </li>
                    <li> {type} </li>
                </ul>
                <div className="rating">
                   
                <Rate rating={rating} />
              
                </div>
                <div className="description">
                    <p> {description} </p>
                </div>
                <div className="card_right__button">
                    <a href=" ">WATCH</a>
                </div>
            </div>
        </div>
    );
};
export default MovieCard;