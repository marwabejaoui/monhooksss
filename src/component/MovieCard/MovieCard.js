import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';
import { Link} from 'react-router-dom';


const MovieCard = ({
    movie :{ id,name, rating, image, date, type, description }
}) => {
 
    return (
        <div className="card">
            <div className=" cardimg">
                <img src={image} alt="shark" />
            </div>
            <div className="all">
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
                  <a href =" "> description </a>
                    </div>
                    
                <div className="card_right__button">
                    <Link to={`/details/${id}`}>WATCH</Link>
                    </div>
                    </div>
            </div>
        </div>
    );
  
};
export default MovieCard;