const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require ('./videogames')
const genres = require ('./genres')

// accept-Encoding: null


const router = Router();

router.use('/videogames', videogames );
router.use('/genres', genres);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);









module.exports = router;
