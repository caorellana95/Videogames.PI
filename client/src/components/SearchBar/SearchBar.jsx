import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { allGames } from "../../actions/actions";

export default function SearchBar(){
const dispatch = useDispatch()
const [name, setName] = useState("")

function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    console.log(name)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(allGames(name))
}

return (
    <div>
        <input
        type = 'text'
        placeholder="Search..."
        onChange={(e) = handleInputChange(e)}
        />
        <button type = 'submit' onSubmit={(e) => handleSubmit(e)}>Search</button>
    </div>
)

}