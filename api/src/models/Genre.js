const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('genre', {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamp: true,
        createdAt: 'creado',
        updatedAt: false
    })
}