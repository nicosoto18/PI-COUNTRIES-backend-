import style from "./countryDetail.module.css";
import { useParams,Link } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import { countryDetail } from "../redux/actions";
import Card from "../card/card";
import { useEffect, useState } from "react";

const CountryDetail=()=>{

const detail = useSelector((state)=>state.countryDetail);  
const {id} = useParams()
const dispatch = useDispatch()

useEffect(()=>{
 dispatch(countryDetail(id))   
},[id])

const [hayActividad, setHayActividad] = useState(false)

const handleClick=()=>{
if(detail.Activities.length>0){return setHayActividad(true)}
else{
   alert("No hay actividades cargadas en este pais")
   setHayActividad(false)
   }
}

return(
    <div className={style.contenedor}>
       
       <div className={style.btBack}><Link to="/Home"><button>back</button></Link></div>
      
       <div className={style.card}>
       <Card 
       Nombre={detail.Nombre}
       Id= {detail.Id}
       Continente = {detail.Continente}
       Capital = {detail.Capital}
       Subregion={detail.Subregion}
       Area={detail.Area}
       Poblacion={detail.Poblacion}     
       Imagen={detail.Imagen}
       />
       </div>
       <div className={style.mostrarActivid}><button onClick={handleClick}>Mostrar actividades</button></div>
        {
         hayActividad
          ? 
           <div className={style.Actividades}>
              <div className={style.titulo}><h2>Actividades</h2></div>
               {
                 detail.Activities.map((activity)=>(
                  <div className={style.actividad}>
                   <h2>{activity.Nombre}</h2>
                   <h3>Temporada: {activity.Temporada}</h3>
                   <h3>Duracion: {activity.Duracion} minutos</h3>
                   <h3>Dificultad(1-5): {activity.Dificultad}</h3>   
                  </div>   
                 ))
              }
             </div>
          :null
       }
   
    </div>
 )
}

export default CountryDetail;