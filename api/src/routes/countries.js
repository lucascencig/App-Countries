const express = require("express");
const axios = require('axios')
const router = express.Router();
const { Op } = require("sequelize");

const {Country, Activity} = require("../db.js");

router.use(express.json())

// ruta TODOS LOS PAISES
router.get("/", async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        let EncontrarPais = await Country.findAll({
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          include: {model: Activity},
        });
        if (EncontrarPais.length) {
          return res.json(EncontrarPais);
        }
        return res
          .status(404)
          .json({
            error: "Pais no encontrado",
            description: "El pais que busco no se encontró",
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



// RUTA POR PARAMS
router.get("/:idPais", async(req, res) => {
    const {idPais} = req.params
    try{
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

// router.delete('/', async(req, res) => {

// })

const apiyDB = async () => {
    const apiTotal = await apiTotal();
    const dbGet = dbGet();
    const apiConDb = apiTotal.concat(dbGet);
    return apiConDb;
}



module.exports = router;

