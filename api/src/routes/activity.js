const express = require('express');
const router = express.Router();

const { Activity, Country } = require('../db');
router.use(express.json());

router.post('/', async (req, res, next) => {
  const { name, dificultad, duracion, temporada, countries } = req.body;
  try {
    let activityCreate = await Activity.create({
      name,
      dificultad,
      duracion,
      temporada,
    });
    countries.map(async countryId => {
      const foundCountry = await Country.findAll({
        where: { idPais: countryId },
      });
      if (foundCountry) activityCreate.addCountries(foundCountry);
    });
    res.status(201).send('Actividad Creada!');
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const dbData = await Activity.findAll({
      include: { model: Country, attributes: ['name', 'idPais'] },
    });
    res.json(dbData);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:name/delete', (req, res) => {
  Activity.destroy({
    where: {
      name: req.params.name,
    },
  }).then(function (r) {
    res.json({
      status: 1,
      data: r,
    });
  });
});

module.exports = router;
