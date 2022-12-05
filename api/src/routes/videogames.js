require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios').default
const { Videogame, Genre } = require('../db');
const { API_KEY } = process.env

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`, {
        headers: {
            'Accept-Encoding': 'application/json'
        }
    })
    // const apiInfo = apiUrl.data.results.map(el => {
    //     return{
    //         name: el.name,
    //         description: el.description, 
    //         released: el.released, 
    //         rating: el.rating,
    //         image: el.image, 
    //         platforms: el.platforms 
    //     }
    // });

    const apiInfo = apiUrl.data.results
    console.log(apiInfo, 'hola')
    return apiInfo
}

const getDbInfo = async ()=>{
    return await Videogame.findAll({
        include:{
            model: Genre,
            attributes: ['name'],
            through:{
                attributes: [],
            }
        }
    })
}

const getAllVideogames = async () =>{
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo)

    return infoTotal
}

// accept-Encoding: null


const router = Router();


router.get('/', async(req, res) => {
    const name = req.query.name
    const allGames = await getAllVideogames()
    
    console.log(API_KEY)
    
    try {
        if(name){
            let gameName = await allGames.filter(el => el.name.includes(name))
            res.status(200).send(gameName)
            res.status(400).send(error.message)
        }else{
            res.status(200).send(allGames)
        }
        
    } catch (error) {
        console.log(error.message)
    }
   
    
})



router.post('/', async(req, res) => {
    const {name, description, rating, released, genres, platforms, image} = req.body
    try {
        const gameCreated = await Videogame.create({
            name,
            description,
            rating,
            released,
            genres,
            platforms,
            image
        })
        await gameCreated.addGenres(genres)
        res.status(200).json(gameCreated)
    } catch (error) {
        res.status(404).json('Faltan datos obligatorios')
        
    }
})


module.exports = router;