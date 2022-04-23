const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    ID:{
      type: DataTypes.UUID,
      allowNull:false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad:{
      type: DataTypes.INTEGER, //FIJARSE COMO HACER ENTRE 1 Y 5.
    },
    duracion:{
      type: DataTypes.STRING, 
    },
    temporada:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
    }
  });
};
