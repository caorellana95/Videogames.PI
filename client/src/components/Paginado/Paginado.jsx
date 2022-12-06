import React from "react";


export default function Paginado({ allVideogames, videogamesPorPagina, paginado , pagina}) {
    const numPagina = []
    const numDePaginas = Math.ceil(allVideogames / videogamesPorPagina)
    for (let i = 1; i < numDePaginas; i++) {
        numPagina.push(i)
    }
    return (
        <nav className="nav_pagination">
        {numPagina && numPagina.map((num) => {
            return <button className={num === pagina ? 'button_pagination' : 'noButton'} key={num} onClick={() => paginado(num)}>{num}</button>;
        })}
        </nav>
    )
}