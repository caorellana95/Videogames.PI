// import { useState, useEffect } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { createVideogame, getGenres } from "../../redux/actions";
// import { useDispatch, useSelector } from 'react-redux';


export default function CreateVideogame() {
//     const dispatch = useDispatch()
//     const genres = useSelector((state)=> state.genres)
//     const historial = useHistory()
// }

// const [input, setInput] = useState({
//     name: "",
//     description: "",
//     released: "",
//     rating: "",
//     image: "",
//     platforms: [],
//     genres: []
// })

// const [errors, setErrors] = useState({})

// function handleInputChange(e) {
//     setInput({
//         ...input,
//         [e.target.name]: e.target.value
//     })
//     setErrors(validate({
//         ...input,
//         [e.target.name]: e.target.value
//     }))
// } 

// function handleSelectGenre(e) {
//     setInput({
//         ...input,
//         genres: [...input.genres, e.target.value]
//     })
//     setErrors(validate({
//         ...input,
//         genres: [...input.genres, e.target.value]
//     }))
// }

// function handleDelete(e) {
//     setInput({
//         ...input,
//         platforms: input.platforms.filter(p => p !== e)
//     })
// }

// function handleDeleteGenre(e) {
//     setInput({
//         ...input,
//         genres: input.genres.filter(g => g !== e)
//     })
// }
// function handleSelectPlatform(e) {
//     setInput({
//         ...input,
//         platforms: input.platforms.includes(e.target.value) ?
//             [...input.platforms] :
//             [...input.platforms, e.target.value]
//     })
//     setErrors(validate({
//         ...input,
//         platforms: [...input.platforms, e.target.value]
//     }))
// }



// function handleSubmit(e) {
//     e.preventDefault();
//     if (!input.platforms) {
//         alert('A platform is required!')
//     return
//         } else if (!input.genres) {
//     return alert("A genre is required!");
// } else { 
//     console.log(input);
//     dispatch(createVideogame(input));
//     alert("Videogame created!");
//     setInput({
//     name: "",
//     description: "",
//     released: "",
//     rating: "",
//     background_image: "",
//     platforms: [],
//     genres: [],
//     });
//     document.getElementById("form").reset();
//     history.push('/videogames')

// }
// } 

// useEffect(() => {
//     dispatch(getGenres());
//     }, [dispatch]);


// export function validate(input) {
//     let errors = {};
//     if (!input.name) {
//         errors.name = 'Name is required';
//         } else if (input.name.length < 2) {
//         errors.name = 'Name is invalid, should contain at least 2 characters';
//         }
//     if (!input.description) {
//         errors.description = 'Description is required';
//         } else if (input.description.length < 20) {
//         errors.description = 'Description should contain more than 20 characters';
//     }
//     if (!input.rating) {
//         errors.rating = 'Rating is required';
//         } else if (input.rating < 0 || input.rating > 5) {
//         errors.rating = 'Rating is invalid, should be between 0 and 5';
//     }
//     if (!input.genre) {
//         errors.genres = 'Genre is required';
//         } 
//     if (!input.platforms) {
//         errors.platforms = 'Platform is required';
//         } 
//     return errors;
}
