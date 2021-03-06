const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    idPais:{
      type: DataTypes.STRING(3),
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    imagen:{ 
      type: DataTypes.TEXT, 
      validate: {isUrl: true}
    },
    continente:{
      type: DataTypes.STRING,
    },
    capital:{
      type: DataTypes.STRING,
    },
    subregion:{
      type: DataTypes.STRING,

    },
    area:{
      type: DataTypes.REAL,
    },
    poblacion:{
      type: DataTypes.INTEGER,
    }


  });
};
