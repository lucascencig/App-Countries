const express = require("express");
const axios = require('axios')
const router = express.Router();


const {Country} = require("../db.js");
const { query } = require("express");
const Activity = require("../models/Activity.js");



//ruta TODOS LOS PAISES
router.get('/', async(req,res)=>{ 

    try{
        const apiTotal = await axios.get("https://restcountries.com/v3/all")
        let resultTotal = await apiTotal.data.map(e => {
            return{
                imgBandera: e.flags[0],
                nombre: e.name.common,
                continente: e.continents,
            }
        }) 
        res.json(resultTotal)
    }  
    catch(err){
        throw new Error(err) 
    }
    }) 


//RUTA POR QUERY
    router.get('/?name', async(req,res) => {
        const {name} = req.query
     
       try{
        const apidataName = await axios.get(`https://restcountries.com/v3/name/${name}`)
        const resultName = await apidataName.data.map(e => {
            return{
                imgBandera: e.flags[0],
                nombre: e.name.common,
                capital: e.capital[0],
                poblacion: e.population,
            }
        }) 
        res.json(resultName) 
    }
    catch(err){
        if(!name){
            res.status(400).send({err: "¡No escribiste ningun nombre de país!"}) 
        }
        if(name !== Country.name){
            res.status(400).send({err: "¡No existe ningun país con ese nombre!"})
        }
       
    }
     
    })


//RUTA POR PARAMS
router.get("/:idPais", async(req, res) => {
     const {idPais} = req.params
    try{
       
        const apidataCode = await axios.get(`https://restcountries.com/v3/alpha/${idPais}`)
        
        let resultCodes = await apidataCode.data.map(e => {
            return{
                imgBandera: e.flags[0],
                nombre: e.name.common,
                codLetras: e.cca3,
                capital: e.capital[0],
                continente: e.continents[0],
                // id: e.idd,  // FIJARSE BIEN EL ID.
                subregion: e.subregion,
                area: e.area,  //FIJARSE COMO PONERLO EN KM2.
                poblacion: e.population,
                actividades: e.actividades //FIJARSE COMO RELACIONAR LAS ACTIVIDADES.
            }
        })
         res.json(resultCodes);
    }
       
    catch(err){
        if(!idPais){
            res.status(400).send({err: "¡No escribiste ningun nombre de país!"})
        }
        if(idPais !== Country.idPais){
            res.status(400).send({err: "¡No existe ningun país con ese nombre!"})
        }
    }
})  


//ruta POST:

router.post('/activity', async(req,res)=>{
 let  {ID,nombre,dificultad,duracion, temporada, } = req.body

 const activityCreated = await Activity.create({
     ID,
     nombre,
     dificultad,
     duracion,
     temporada,

 })

    
})


module.exports = router;

