import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import css from '../NavBar/NavBar.module.css';
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";



function NavBar() {
    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getVideogames())
    }
    return (
         <nav className={css.nav}>
                <div className={css.busqueda}>
                    <SearchBar />
                </div>
                {/* <div className={css.imagencita}>
                    <img src={imagen} alt="mario.gif" className={css.gif}/>
                </div> */}
                <div className={css.search}>
                    <button className={css.btn}onClick={e => handleRefresh(e)}>Refresh</button>
                    <span className={css.opcion}><NavLink to={'/create'} className={css.to}> Crear Videojuego</NavLink></span>
                </div>
            </nav>
    )
}


export default NavBar;