import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { searchByName } from "../../actions/actions";

export default function SearchBar(){
const dispatch = useDispatch()
const [search, setSearch] = useState("")

function handleInputChange(e){
    e.preventDefault()
    setSearch(e.target.value)
    console.log(search)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(searchByName(search))
}

return (
    <div>
        <input
        type = 'text'
        placeholder="Search..."
        onChange={(e) = handleInputChange(e)}
        />
        <button onClick = 'submit' onSubmit={(e) => handleSubmit(e)}>Search</button>
    </div>
)

}