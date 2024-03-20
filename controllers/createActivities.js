const {Activity,Country} = require("../src/db");

const createActivities = async (req,res)=>{
try {     
     const {Nombre, Dificultad, Duracion, Temporada, Paises} = req.body
       console.log("hola")
     if(Nombre && Dificultad && Duracion && Temporada){
       
       const newActivity = await Activity.create({Nombre,Dificultad,Duracion,Temporada})      
       if(Paises.length > 0){ 
        const countries = await Country.findAll({where: {Id:Paises}});
        await newActivity.addCountries(countries) // metodo relacion de n a n.
         }
    return res.json(newActivity)
    }
      return res.status(200).json({error: "No llegaron correctamente los parametros"})
     }
     catch (error) {
    return res.status(500).json({error: error.message});
} 
}

module.exports= createActivities;