const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define('Country', {               // defino el modelo
    Id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Imagen:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    Continente: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    Capital: {
      type:DataTypes.STRING,
      defaultValue:"Desconocida" 
    },
    Subregion: {
      type: DataTypes.STRING,
      
    },
    Area:{
      type:DataTypes.INTEGER
    },
    Poblacion:{
     type: DataTypes.INTEGER,
     allowNull:false,
    },
  },{
    timestamps: false
    }
  );
  
};