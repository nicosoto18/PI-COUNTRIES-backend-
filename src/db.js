require("dotenv").config();
const { Sequelize } = require("sequelize");
const CountryModel = require("./models/Country");
const ActivityModel = require("./models/Activity");
const fs = require('fs'); //funciones para trabajar con el sistema de archivos
const path = require('path'); //utilidades para manejar y transformar rutas de archivos
const {DB_USER, DB_PASSWORD,DB_HOST,DB_NAME,DB_PORT,DATABASE_URL} = process.env;


// const sequelize = new Sequelize(
//    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   //  DATABASE_URL, 
//   {
//   logging: false, 
//   native: false, 
// });

const sequelize = new Sequelize(
   DATABASE_URL, 
 {
 logging: false, 
 native: false, 
});

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


 CountryModel(sequelize);   
 ActivityModel(sequelize);

modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);



const {Country,Activity } = sequelize.models;
// relaciones
Activity.belongsToMany(Country, {through: "Countries_activities"});
Country.belongsToMany(Activity, {through: "Countries_activities"});

module.exports = {
  Country, 
  Activity,
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};