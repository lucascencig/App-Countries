const express = require("express");
const axios = require('axios')
const router = express.Router();
const { Op } = require("sequelize");

const {Country, Activity} = require("../db.js");
// const { query } = require("express");
router.use(express.json())


// const apiTotal = async function apiTotal(){
   
//     try{
//         const apiTotal = await axios.get("https://restcountries.com/v3/all")
//         let resultTotal = await apiTotal.data.map(e => {
//             return{
//                 imgBandera: e.flags[0],
//                 nombre: e.name.common,
//                 continente: e.continents,
//             }
            
//         }) 
//         res.json(resultTotal)
//     }  
//     catch(err){
//         throw new Error(err) 
//     }
// }

// const dbGet = async function dbGet(){
//     try{
//         const dbData =  await Activity.findAll({ 
//             include:{model: Country,   attributes: ["name"], through:{ attributes: []}
//         }
//         })
//         console.log(dbData)
//         let resultado = await dbData?.map(r => {
//                  return {
//                      id: r.Id,
//                      name: r.name,
//                      dificultad: r.dificultad, 
//                      duracion: r.duracion,
//                      temporada: r.temporada,
//                     //  activities: Activity.Country?.map(r => r.name),
//                  }
//              });
//         return resultado;
//     }catch (err) {
//       console.error(err);
//     }
// }


// ruta TODOS LOS PAISES

router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        let findName = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          include: {model: Activity},
        });
        if (findName.length) {
          return res.json(findName);
        }
        return res
          .status(404)
          .json({
            error: "COUNTRY_NOT_FOUND",
            description: "The entered country does not exist.",
          });
      }
      const countryInDB = await Country.findAll({
        include: { model: Activity },
      });
      res.status(200).json(countryInDB);
    } catch (e) {
      console.log("/routes/countries get error", e.message);
      return res
        .status(404)
        .send({ error: "NOT_FOUND", description: "Server error" });
    }
  });



//RUTA POR QUERY
    // router.get('/?name', async(req,res) => {
    //     const {name} = req.query
     
    //    try{
    //     const apidataName = await axios.get(`https://restcountries.com/v3/name/${name}`)
    //     const resultName = await apidataName.data.findAll({
    //         include: {model: Activity}
    //     }) 
    //     res.json(resultName) 
    // }
    // catch(err){
    //     if(!name){
    //         res.status(400).send({err: "¡No escribiste ningun nombre de país!"}) 
    //     }
    //     if(name !== Country.name){
    //       res.send({err: "¡No existe ningun país con ese nombre!"})
    //     }
       
    // }
     
    // })


// RUTA POR PARAMS
router.get("/:idPais", async(req, res) => {
     const {idPais} = req.params
    try{
       
        // const apidataCode = await axios.get(`https://restcountries.com/v3/alpha/${idPais}`)
        
        let resultCodes = await Country.findByPk(idPais.toUpperCase(), {include: {model: Activity}})
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

const apiyDB = async () => {
    const apiTotal = await apiTotal();
    const dbGet = dbGet();
    const apiConDb = apiTotal.concat(dbGet);
    return apiConDb;
}



module.exports = router;

