const { Router } = require('express');
const { Genre, Videogames } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env

const router = Router()

router.get('/:idVideogame', async(req, res) => {
    const { idVideogame } = req.params
    if (idVideogame.includes('-')){
        const videogameDb = await Videogame.findByPk(idVideogame, {
            include: Genre
        })
        videogameDb.genres = videogameDb.genres?.map(g => g.name)
        res.json(videogameDb)
    }else{
        try {
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`)
        const {name, description, released, rating, image, platforms, genres} = response.data
        genres.map(genre=>genre.name)
        platforms.map(platforms=>platforms.name)

        return res.json({
            name,
            description,
            released,
            rating,
            image,
            platforms,
            genres
        })
        } catch (error) {
            return console.log(error)
            
        }
        
    }
})