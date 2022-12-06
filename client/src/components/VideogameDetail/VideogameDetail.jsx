import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearDetail, getDetails } from "../../redux/actions";


export default function VideogameDetail() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const detail = useSelector((state) => state.videogameDetail)

    useEffect(()=> {
        dispatch(getDetails(id))
    }, [dispatch, id])

    function handleClick(){
        dispatch(clearDetail)
    }

    return(
        <div className= "VideogameDetail">
            <h2>{detail.name}</h2>
            <h4>{detail.genres}</h4>
            <h4>{detail.platforms}</h4>
            <h5 className="rating">{detail.rating}</h5>
            <h5>Fecha de lanzamiento: {detail.released}</h5>
            <p>Descripción: {detail.description}</p>
            <Link to="/videogames" className="link">
                <button className="backDetail" onClick={(e)=> handleClick(e)}>Atrás</button>
            </Link>
        </div> 

    )


}