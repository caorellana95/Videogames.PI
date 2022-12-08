import React from "react";
import { useState } from "react";
import { useDispatch  } from "react-redux";
import { searchByName } from "../../redux/actions";
import cs from '../SearchBar/SearchBar.module.css';


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
    <div className={cs.container}>
            <form action="" className={cs.searchBar} onChange={handleInputChange}>
                <input className={cs.inputSearch} type="text" placeholder='Buscar Videojuegos'/>
                <button type={cs.submit} onClick={handleSubmit} className="submit">Buscar</button>
            </form>
        </div>
)

}