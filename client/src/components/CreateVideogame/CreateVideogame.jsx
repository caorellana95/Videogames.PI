import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { allGames } from '../actions/actions';
import {useDispatch, useSelector} from "react-redux";
import  NavBar from '../NavBar/NavBar';
import NavBar from '../NavBar/NavBar';


export function CreateVideogames(){
    const dispatch = useDispatch()
    const allGames = useSelector((state) => state.allGames)


// const [input, setInput] = useState({
//     name: "",
//     description: "",
//     released: "",
//     rating: "",
//     platforms: ""
// })

useEffect(() => {
    dispatch(allGames())
}, [dispatch])

return(
    <>
    <NavBar />
    <div > 
        <h2>Videogames</h2>
            <div >
            {allGames?.map((e)=>{
            return(
                <div >
                <Videogame
                key={e.id}
                name={e.name}
                image={e.image}
                genres={e.genres.map(e => e.name).join(" ")}
                />
                </div>
            )
            })}
            </div>
    </div>
    </>
)
};