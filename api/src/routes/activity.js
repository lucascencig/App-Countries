const express = require("express");
// const {  Activities } = require("../../../client/src/components/Activity");
const router = express.Router();
require('dotenv').config();

const {Activity, Country} = require("../db");


router.post('/', async(req,res, next)=>{
    const { name, dificultad, duracion, temporada, paiss} = req.body

    try{

        let activityCreate = await Activity.create({
             name, dificultad, duracion, temporada
        })
        paiss.map(async (countryId) => {
            const foundCountry = await Country.findAll({
              where: { idPais: countryId },
            });
            if (foundCountry) activityCreate.addCountries(foundCountry);
          });
       
        res.send("Actividad Creada!")
        // console.log(activityCreate)
    }
    catch(err){
            next(err)
        }
    
})

router.get('/', async(req,res)=>{
    try{
        const dbData =  await Activity.findAll({ 
            include:{model: Country,   atributes: ["name"], through:{ attributes: []}
        }
    })
        console.log(dbData)
        let resultado = await dbData?.map(r => {
                return {
                    id: r.ID,
                    name: r.name,
                    dificultad: r.dificultad, 
                    duracion: r.duracion,
                    temporada: r.temporada,
                    //  activities: Activity.Country?.map(r => r.name),
                }
            });
            res.json(resultado)
           
    }catch (err) {
    console.error(err);
    }
})

module.exports = router;