import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allGames, getGenres } from '../actions/actions';
import {useDispatch, useSelector} from "react-redux";


export function CreateVideogames(){
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
}

const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: ""
})

useEffect(() => {
    dispatch(getGenres())
}, [])

return(
    <div>
        <Link to= '/home'><button>Volver</button></Link>
    </div>
)