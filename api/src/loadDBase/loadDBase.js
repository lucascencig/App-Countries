const axios = require('axios');
const { Country } = require('../db');



const loadDB = async ()=> {
  
  try {
    const apiInfo = (await axios.get("https://restcountries.com/v3/all")).data;
    await apiInfo.map((element) => {
      Country.findOrCreate({
        where: {
          idPais: element.cca3,
          name: element.name.common,
          imagen: element.flags[1],
          continente: element.continents[0],
          capital: element.capital ? element.capital[0] : "Capital not found",
          subregion: element.subregion
            ? element.subregion
            : "Subregion not found",
          area: element.area,
          poblacion: element.population
        },
      });
    });
    return "Countries successfully added in database...";
  } catch (e) {
    console.log("/api/src/routes/apiInfo.js apiInfo error: " + e);
  }
};


module.exports = loadDB;