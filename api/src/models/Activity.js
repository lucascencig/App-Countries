const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    ID:{
      type: DataTypes.UUID,
      allowNull:false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dificultad:{
      type: DataTypes.ENUM('1', '2', '3', '4', '5'), //FIJARSE COMO HACER ENTRE 1 Y 5.
    },
    duracion:{
      type: DataTypes.STRING, 
    },
    temporada:{
      type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera')
    },

    // creado:{
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // }

  });
};
