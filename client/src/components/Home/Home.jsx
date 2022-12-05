// import React from "react";
// import SearchBar from './searchBar';
// import Paginado from "./components/Paginado/Paginado";
// import { useDispatch, useSelector } from 'react-redux'
// import Card from './Card/Card';
// import { Link } from 'react-router-dom';

// import {filterByCreation, filterByGenre, sortByRating, sortByAlpha, getVideogames, getGenres} from './redux/actions/actions'
// import { useState, useEffect } from "react";

// export default function Home() {
//     const dispatch = useDispatch();

//     const allGenres = useSelector((state) => state.genres);
//     const allVideogames = useSelector((state) => state.videogames);
//     const [page, setPage] = useState(1);
//     const [order, serOrder] = useState('');
//     const videogamesPerPage = 15;
//     const lastVideogamePerPage = page * videogamesPerPage;
//     const firstVideogamePerPage = lastVideogamePerPage - videogamesPerPage;
//     const currentPageVideogames = allVideogames.slice(firstVideogamePerPage, lastVideogamePerPage)
// }