import React from 'react';
import { Link } from 'react-router-dom';
// import imagen from '../images/masterChiefHalo.jpg'
import SearchBar from '../SearchBar/SearchBar';
import cs from '../NavBar/NavBar.module.css';
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";



function NavBar() {
    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getVideogames())
    }
    return (
         <nav className={cs.nav}>
                <div className={cs.busqueda}>
                    <SearchBar />
                </div>
                {/* <div className={cs.imagen}>
                    <img src={imagen} alt="master chief"/>
                </div> */}
                <div className={cs.search}>
                    <button className={cs.btn}onClick={e => handleRefresh(e)}>Refresh </button>
                    <span className={cs.opcion}><Link to={'/create'} className={cs.to}> Crear Videojuego</Link></span>
                </div>
            </nav>
    )
}


export default NavBar;