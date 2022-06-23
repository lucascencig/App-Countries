//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import axios from 'axios';
const axios = require('axios');
const server = require('./src/app.js');
const { conn, Country } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console

    try {
      const apiInfo = (await axios.get('https://restcountries.com/v3/all'))
        .data;
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

    //   const paises = ['argentina', 'venezuela', 'colombia'];
    //   paises.forEach(async (e) => await Country.create({name: e}))
  });
});
