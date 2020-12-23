import React from 'react'
import Rating from './Rating'
import './movieCard.css'
function MovieCard({el}) {

    return (
        <div className='card'>
            <h2>{el.title}</h2>
            <Rating RateFilter={el.rate} />
            <img style={{width:'200px' }} src={el.posterUrl} />
            <br/>
            <p style={{width:'95%'}}>{el.description}</p>
        </div>
    )
}

export default MovieCard
