const {DataTypes} = require("sequelize");

module.exports=(sequelize)=>{
    sequelize.define('Activity', {
        Id : {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            
        },
        Nombre:{
            type: DataTypes.STRING,
            allowNull:false
        },
        Dificultad: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        Duracion:{
            type: DataTypes.FLOAT,   
        },
        Temporada: {
            type:DataTypes.STRING,
            allowNull:false,
        }
    },
    {timestamps: true,}
    
    )
}