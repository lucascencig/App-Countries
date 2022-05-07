const axios = require('axios');
const { Country } = require('../db');



const loadDB = async ()=> {
  try{
   
    const apiTotal = await axios.get("https://restcountries.com/v3/all")
    let resultTotal = await apiTotal.data.map(e => {
        return{
            idPais: e.cca3,
            name: e.name.common,
            imagen: e.flags[1],
            continente: e.continents[0],
            capital: e.capital? e.capital[0]: "null" ,
            subregion: e.subregion? e.subregion :"null",
            area: e.area,
            poblacion: e.population
        }
    })
    await resultTotal.map(async e => {
        Country.create(
            {
            idPais: e.idPais,
            name: e.name,
            imagen: e.imagen,
            continente: e.continente,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            poblacion: e.poblacion
        })
        
    })

}catch(e){
    console.log(e)
}
}


module.exports = loadDB;