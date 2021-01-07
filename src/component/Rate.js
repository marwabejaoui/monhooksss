import React from 'react';

const Rate = ({ rating, setRatingSearch }) => {
    const stars = (x) => {
        let starsArry = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= x) {
                starsArry.push(
                    <span key={i} onClick={() => setRatingSearch(i)}>
                        ★
                    </span>
                );
                
            } else {
                starsArry.push(
                    <span key={i} onClick={() => setRatingSearch(i)}>
                        ☆
                    </span>
                );
            }
        }
            return starsArry;
        }
        return <div>{stars(rating)} </div>
    };
    Rate.defaultProps = {
        setRatingSearch: () => { },
        rating: 1,
    }

    export default Rate;