import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { searchByName } from "../../redux/actions";

export default function SearchBar(){
const dispatch = useDispatch()
const [state, setState] = useState("")

function handleInputChange(e){
    e.preventDefault()
    setState(e.target.value)
    // console.log(state)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(searchByName(state))
    setState('')
}

return (
    <div>
        <input
        type = 'text'
        placeholder="Search..."
        onChange={e => handleInputChange(e)}
        />
        <button onClick = 'submit' onSubmit={(e) => handleSubmit(e)}>Search</button>
    </div>
)

}