const axios = require('axios');
const { Country } = require('../db');

const LoadDB = async () => {
  try {
    const apiInfo = (await axios.get('https://restcountries.com/v3/all')).data;
    await apiInfo.map(element => {
      Country.findOrCreate({
        where: {
          idPais: element.cca3,
          name: element.name.common,
          imagen: element.flags[1],
          continente: element.continents[0],
          capital: element.capital
            ? element.capital[0]
            : 'Capital no encontrada',
          subregion: element.subregion
            ? element.subregion
            : 'Subregion no encontrada',
          area: element.area,
          poblacion: element.population,
        },
      });
    });
    return 'Countries agregados a la base de datos.';
  } catch (e) {
    console.log('/api/src/routes/apiInfo.js apiInfo error: ' + e);
  }
};

module.exports = LoadDB;
