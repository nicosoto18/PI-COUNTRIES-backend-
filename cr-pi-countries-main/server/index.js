const { conn } = require('./src/db.js');
const PORT = 3001;

const express = require("express");
const router = require("./src/routes");
const morgan = require("morgan");
const cors = require("cors");
const server = express();

//middleware para configurar los encabezados CORS, recordemos que esto nos da acceso dentro de todos los front
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
  });
  
server.use(express.json());  
server.use(morgan("dev"));
server.use(cors());
server.use("",router); //todo lo que sea barra algo ira a buscarlo al index de routes

module.exports = server;


try {
conn.sync({ force: false })  //cuando quiero hacer cambios tiene que estar en true 
server.listen(PORT, () => {
console.log(`Server listening on port ${PORT}`);  


})
}catch (error) {
  console.log(error.message);
};






