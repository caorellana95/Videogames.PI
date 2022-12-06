import React from 'react';
import cs from '../Card/Card.module.css';

export default function Card({name, genres, image, id}) {

    const genre = genres.join(', ');

    return(
        <div className={cs.card}>
            <h2>{name}</h2>
            <img src={image} alt={name} className='image'/>
            <h4>Genre: {genre}</h4>
        </div>
        

    )
}