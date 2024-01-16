const {Country,Activity} = require("../src/db");

const getCountryId = async (req,res)=>{
  try {
  const {Id} = req.params;  //KEN
  const country = await Country.findByPk(Id, {include: {   
    model: Activity,                                      
    attributes: ["Nombre", "Temporada", "Dificultad", "Duracion"],                 
    through: {                                           
      attributes: [],                                     
    }
  }});
  
  return res.json(country);

  } catch (error) {
   res.json({error: error.message});  
  }

}

module.exports=getCountryId;
