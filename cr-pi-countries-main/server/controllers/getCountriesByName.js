const {Country} = require("../src/db");
const {Op} = require("sequelize");

const getCountriesByName= async(req,res)=>{
try {
    const {name} = req.query;
    if(!name) res.status(400).json({error: "El parametro 'name' es obligatorio"})
    const country = await Country.findOne({
      where:{
        Nombre:{[Op.iLike]:`%${name}%`}
      }
    })
    if(!country) return res.status(404).json({error: "No se encontro ningun pais con ese nombre"})
    return res.json(country);

} catch (error) {
  res.status(500).json({error: error.message});
}

}

module.exports = getCountriesByName;