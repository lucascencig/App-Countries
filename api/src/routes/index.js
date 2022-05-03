const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require("./countries.js")
const activity = require("./activity.js")

const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countries)
router.use("/activity", activity)





module.exports = router;
