const {Activity} = require("../src/db");

const getActivities = async (req,res)=>{
    try {
     const activities = await Activity.findAll()
     if(activities.length){return res.json(activities);}
     return res.json({error: "No hay actividades cargadas"})    
    } catch (error) {
        return res.json({error: error.message})
    }
}

module.exports= getActivities;
