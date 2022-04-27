// var express = require("express");
// const axios = require('axios')

// var server = express();


// // rutas

// const getApiInfo = async () => {
    
// try{
//    const apiAll = await axios.get('https://restcountries.com/v3/all');
   
//    let result = await apiAll.data.map(e => {
//        return {
//           imgBandera: e.flags.png,
//           nombre: e.name.common,
//           continente: e.continents
//        }
       
//    })
//    console.log
// }
// catch(e){
//     throw new Error(e)
// }

// }

// router.get('/', async (req, res) => {
  

   



const express = require("express");
const axios = require('axios')
const router = express.Router();

// const APICOMPLETA = require(".env")
const {Country} = require("../db.js");
const { query } = require("express");



const infApi = async() => {

    try{
        const apidata = await axios.get("https://restcountries.com/v3/all")
      

        let result = await apidata.data.map(e => {
                    return {
                    imgBandera: e.flags[0],
                    nombre: e.name.common,
                    continente: e.continents,
                    
                    
                    
                }
            })
            return result;
  
}
catch(err){
    throw new Error(err);
}
}

// router.get("/", async(req, res)=>{
//     res.json(await infApi())
// })


router.get('/', async(req,res) => {
    const {name} = req.query
 
   
    const apidataName = await axios.get(`https://restcountries.com/v3/name/${name}`)
    // console.log(apidataName)
    res.json(apidataName.data)
})


 

router.get("/:idPais", async(req, res) => {
     const {idPais} = req.params
    try{
       
        const apidataCode = await axios.get(`https://restcountries.com/v3/alpha/${idPais}`)
        
        let resultCodes = await apidataCode.data.map(e => {
            return{
                imgBandera: e.flags[0],
                nombre: e.name.common,
                codLetras: e.cca3,
                capital: e.capital,
                continente: e.continents,
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
        throw new Error(err)
    }
})  



module.exports = router;

