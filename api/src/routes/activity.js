const express = require("express");
const router = express.Router();


const {Activity} = require("../db");

router.post('/', async(req,res)=>{
    const {ID, name, dificultad, duracion, temporada} = req.body

    try{
        let activityCreate = await Activity.create({
            ID, name, dificultad, duracion, temporada
        })
        res.send("Actividad Creada!")
    }
    catch(err){
        if(!ID || !name || !dificultad || !duracion || !temporada){
             res.status(400).send({err: "¡Faltan Datos!"})
        }
    }
})

module.exports = router;