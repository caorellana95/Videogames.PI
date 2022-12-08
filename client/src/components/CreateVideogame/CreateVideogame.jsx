import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { createVideogame, getGenres } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import cs from '../CreateVideogame/CreateVideogame.module.css';


export default function CreateVideogame() {
    const dispatch = useDispatch()

    const platforms = useSelector(state => state.platforms);
    // const videogame = useSelector((state)=> state.videogame)
    const genres = useSelector((state)=> state.genres)
    const historial = useHistory()
    


const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    image: "",
    platforms: [],
    genres: []
})

const [errors, setErrors] = useState({})

function handleInputChange(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
} 

function handleSelectGenre(e) {
    setInput({
        ...input,
        genres: [...input.genres, e.target.value]
    })
    setErrors(validate({
        ...input,
        genres: [...input.genres, e.target.value]
    }))
}

function handleDelete(e) {
    setInput({
        ...input,
        platforms: input.platforms.filter(p => p !== e)
    })
}


function handleSelectPlatform(e) {
    setInput({
        ...input,
        platforms: input.platforms.includes(e.target.value) ?
            [...input.platforms] :
            [...input.platforms, e.target.value]
    })
    setErrors(validate({
        ...input,
        platforms: [...input.platforms, e.target.value]
    }))
}



function handleSubmit(e) {
    e.preventDefault();
    if (!input.platforms) {
        alert('Se requiere plataforma')
    return
        } else if (!input.genres) {
    return alert('Se requiere genero');
} else { 
    console.log(input);
    dispatch(createVideogame(input));
    alert("Videojuego creado");
    setInput({
    name: "",
    description: "",
    released: "",
    rating: "",
    background_image: "",
    platforms: [],
    genres: [],
    });
    document.getElementById("form").reset();
    historial.push('/home')

}
} 

useEffect(() => {
    dispatch(getGenres());
    }, [dispatch]);



    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)} className={cs.boxForm}>
                <div className={cs.form}>
                    <h1 className={cs.titulo}>CREA TU VIDEOJUEGO</h1>

                    <div className={cs.grupo}>
                        <input
                            className={cs.createInput}
                            type= "text"
                            required
                            name="name"
                            value={input.name}
                            onChange={(e) => handleInputChange(e)}/>
                        <span className={cs.danger}>{errors.name}</span>
                        <label className={cs.label}>Nombre</label>
                        {errors.name && (
                            <p className={cs.danger}>{errors.name}</p>
                    )}
                    </div>

                 <div className={cs.grupo}>
                    <input
                            className={cs.createInput}
                            type="text"
                            required
                            name="name"
                            value={input.image}
                            onChange={(e) => handleInputChange(e)}/> 
                    <span className={cs.barra}></span>
                    <label className={cs.label}>URL Imagen</label>
                    {errors.name && (
                    <p className={cs.danger}>{errors.image}</p>
                )}
                </div>

                <div className={cs.grupo}>
                    <input
                            className={cs.createInput}
                            type="text"
                            required
                            name="name"
                            value={input.released}
                            placeholder = 'dd-mm-yyyy'
                            onChange={(e) => handleInputChange(e)}/> 
                    <span className={cs.barra}></span>
                    <label className={cs.label}>Fecha de lanzamiento</label>
                    {errors.name && (
                    <p className={cs.danger}>{errors.released}</p>
                )}
                </div>

                <div className={cs.grupo}>
                    <input
                            className={cs.createInput}
                            type="text"
                            required
                            name="name"
                            value={input.rating}
                            onChange={(e) => handleInputChange(e)}/> 
                    <span className={cs.barra}></span>
                    <label className={cs.label}>Rating</label>
                    {errors.name && (
                    <p className={cs.danger}>{errors.rating}</p>
                )}
                </div>

                <div className={cs.grupo}>
                    <select className={cs.selectCreate} id="genres" defaultValue="" onChange={(e) => handleSelectGenre(e)}>
                        <opcion className={cs.selectCreate} value='' disabled hidden>Elija género...</opcion>
                        {genres.map((g) =>{
                            return (
                            <opcion className={cs.optionCreate} key={g.id} value={g.name}>{g.name}</opcion>
                            )
                        })}
                    </select> <span className={cs.barra}></span>
                    <label className={cs.label}>Géneros</label>
                    {input.genres.map((g) => (
                        <div className={cs.boxOption}>
                        <div className={cs.optionTitle}>{g}</div>
                        <button className={cs.btnRemove} onClick={() => handleDelete(g)} key={g} value={g}><span className={cs.x}>X</span></button>
                        </div>
        ))}
                    
                </div>

                <div className={cs.grupo}>
                    <select className={cs.selectCreate} id="platforms" defaultValue="" onChange={(e) => handleSelectPlatform(e)}>
                        <option className={cs.selectCreate} value='' disabled hidden>Elija plataforma...</option>
                        {platforms.map((p) =>{
                            return (
                            <option className={cs.optionCreate} key={p.id} value={p.name}>{p.name}</option>
                            )
                        })}
                    </select> <span className={cs.barra}></span>
                    <label className={cs.label}>Plataformas</label>
                    {input.platforms.map((p) => (
                        <div className={cs.boxOption}>
                        <div className={cs.optionTitle}>{p}</div>
                        <button className={cs.btnRemove} onClick={() => handleDelete(p)} key={p} value={p}><span className={cs.x}>X</span></button>
                        </div>
        ))}
                    
                </div>

            <div className={cs.grupo}>
            <textarea
              required
              type="text"
              name="description"
              value={input.description}
              onChange={(e) => handleInputChange(e)}
              > </textarea>
            <label className={cs.description}>Descripción: </label>
            {errors.description && (
              <p className={cs.danger}>{errors.description}</p>
            )}
          </div>
          </div>
          <div>
          <button type="submit" className={cs.btn_submit}>Crear Videojuego</button>
      </div>
      <div className={cs.box_home}>
          <Link to={'/home'} className={cs.back_home}>Cancelar</Link>
      </div>

            </form>
        </div>
        )


 function validate(input) {
    let errors = {};
    if (!input.name) {
        errors.name = 'Se requiere Nombre';
        } else if (input.name.length < 2) {
        errors.name = 'El Nombre es inválido. Debe contener al menos dos caracteres';
        }
    if (!input.description) {
        errors.description = 'Se requiere descripción';
        } else if (input.description.length < 20) {
        errors.description = 'La Descripcion debe contener mas de  20 caracteres';
    }
    if (!input.rating) {
        errors.rating = 'Se requiere Rating';
        } else if (input.rating < 0 || input.rating > 5) {
        errors.rating = 'El Rating es inválid. Debe estar entre  0 y 5';
    }
    if (!input.genre) {
        errors.genres = 'Se requiere Género';
        } 
    if (!input.platforms) {
        errors.platforms = 'Se requiere plataforma';
        } 
    return errors;
    }
}
