 const axios = require("axios");
 const {Country,Activity} = require("../src/db");

 const getCountries = async (req,res)=>{
     try {
     const response = await axios.get("https://restcountries.com/v3.1/all")
     const dataPaises = response.data;

      for(const country of dataPaises){
        if(country.cca3 && country.name.common){
            await Country.findOrCreate({
           where: { Id:country.cca3},      
           defaults:{
           Nombre:country.name.common,
           Imagen:country.flags.png,
           Continente:country.continents[0],
           Capital:country.capital && country.capital.length > 0 ? country.capital[0] : null,
           Subregion:country.subregion,
           Area:country.area,
           Poblacion:country.population,
            }
         }) 
        }      
      }
      const countries = await Country.findAll({
        include:{
          model: Activity,
          attributes: ["Id","Nombre" ],
          through: {
            attributes: [],
          },
        },
      });
      res.json(countries)

     } catch (error) {
      console.log(error);
      res.status(500).json({error: "No se pudo traer a los countries"});
     }

     };
       
module.exports = getCountries;