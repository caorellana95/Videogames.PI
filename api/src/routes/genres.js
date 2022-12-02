require('dotenv').config();
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios').default
const { Genre } = require('../db');
const { API_KEY } = process.env
const router = Router();

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`, {
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

const getAllGenres = async () =>{
    const apiInfo = await getApiInfo()
    const dbInfo = await getDbInfo()
    const infoTotal = apiInfo.concat(dbInfo)

    return infoTotal
}





router.get('/', async(req, res) => {
    try {
        const genreDb = await getAllGenres({
            attributes: ['id', 'name'],
        })
        if(genreDb.length){
            return res.json(genreDb)
        }
        console.log(genreDb)


        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const results = response.data.results.map((genre) => 
            genre.name
        )
            
        results.forEach((genre) => {
                Genre.create({
                    where:{
                        name: genre.name
                    }
                })
                
            });

        const genresREADY = await Genre.findAll({
            attributes: ['id', 'name'],
        })
        res.json(genresREADY)
        console.log(genresREADY)
        }

        

     
    catch (error) {
    res.send(error.message)   
 }
})


module.exports = router;