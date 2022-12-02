const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    released:{
      type: DataTypes.STRING,
      allowNull: false
    },
    rating:{
      type: DataTypes.INTEGER
    },
    image:{
      type:DataTypes.TEXT,
      allowNull: true
    },
    platforms:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamp: false,
    createdAt: false,
    updatedAt: false
  });
};
