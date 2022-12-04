import React from "react";

export default function Videogame({name, image, genre}){
    return(
        <div>
            <h2>{name}</h2>
            <h4>{genre}</h4>
            <img src={image} alt= "img not found"/>
        </div>
    )
}

