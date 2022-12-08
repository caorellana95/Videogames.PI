import React from "react";
import Paginado from "../Paginado/Paginado";
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import {filterByCreation, filterByGenre, sortByRating, sortByAz, getVideogames, getGenres} from "../../redux/actions";
import { useState, useEffect } from "react";
import cs from '../Home/Home.module.css'

export default function Home() {
    const dispatch = useDispatch();

    const allGenres = useSelector((state) => state.genres);
    const allVideogames = useSelector((state) => state.videogames);
    const [page, setPage] = useState(1);
    const [serOrder] = useState('');
    const videogamesPorPagina = 15;
    const ultimoVideogamePorPagina = page * videogamesPorPagina;
    const primerVideogamePorPagina = ultimoVideogamePorPagina - videogamesPorPagina;
    const paginaActualVideogames = allVideogames.slice(primerVideogamePorPagina, ultimoVideogamePorPagina)

    useEffect(() => {
        dispatch(getVideogames())
    }, [dispatch])

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch])

    function paginado(num){
        setPage(num)
    }

    // function handleClick(e){
    //     e.preventDefault()
    //     dispatch(getVideogames())
    // } 

    function filterByCreationHandler(e){
        dispatch(filterByCreation(e.target.value))
        setPage(1)
    }

    function filterByGenreHandler(e){
        dispatch(filterByGenre(e.target.value))
    }

    function sortByRatingHandler(e){
        e.preventDefault()
        dispatch(sortByRating(e.target.value))
        setPage(1)
        serOrder(e.target.value)
    }

    function sortByAzHandler(e){
        e.preventDefault()
        dispatch(sortByAz(e.target.value))
        setPage(1)
        serOrder(e.target.value)
    }

    return (
        <div className={cs.home_container}>
            
            <NavBar/>
                <h1 className={cs.titleHome}>Henry Videogame App</h1>
                <div className={cs.container_buttons}>
                {/* <div className="search_bar" id="searchbar">
                    <SearchBar/>
                </div> */}
                {/* <button onClick={(e) => handleClick(e)}>Mostrar Juegos</button>
                <button ><Link className="createLink" to="/create">Crear Juego</Link></button> */}
                </div>
                <div className='filters'>
                    <select className={cs.selector} onChange={(e) => sortByRatingHandler(e)}>
                        <option value="rating">Ordenar por Rating</option>
                        <option value="ascendente">Ascendente</option>
                        <option value="descendente">Descendente</option>
                    </select>
                    <select className={cs.selector} onChange={(e) => sortByAzHandler(e)}>
                        <option value="AZ">Orden Alfabético</option>
                        <option value="ascendente">A-Z</option>
                        <option value="descendente">Z-A</option>
                    </select>
                    <select className={cs.selector} onChange={(e) => filterByGenreHandler(e)}>
                        <option value="genre">Géneros</option>
                        {allGenres && allGenres.map((g) => {
                            return <option value={g.name} key={g.id}>{g.name}</option>
                        })}
                    </select>
                    <select className={cs.selector} onChange={(e) => filterByCreationHandler(e)}>
                        <option value="all">Videojuegos</option>
                        <option value="db">Creados</option>
                        <option value="api">Existentes</option>
                    </select>
                </div>
                <div>
                    <Paginado 
                        allVideogames={allVideogames.length}
                        videogamesPorPagina={videogamesPorPagina}
                        paginado={paginado}
                        
                    />
                </div>
                <div className={cs.card_container}>
                    {paginaActualVideogames && paginaActualVideogames.map((v) => {
                        return (
                            <section className="card_home" key={v.id}>
                            <Link to={`/videogame/${v.id}`} className="linkDetail"> 
                                <Card
                                name={v.name}
                                background_image={v.background_image}
                                genres={v.genres.map(g => g.name)}
                                rating={v.rating}
                                key={v.id}
                                /> 
                            </Link>
                            </section>
                    )})
                    }
                </div>
            
               
        </div>
                
        
        
    )
}