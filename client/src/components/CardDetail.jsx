import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Countries from "./Card";
import Activities from "./Activity";
import { getDetail, getActivities , detailDelete} from "../../../client/src/actions/index";
import S from '../../../client/src/styles/CardDetail.module.css';


export default function CardDetail(props){

const dispatch = useDispatch();
const {id} = useParams();
useEffect(()=>{
    dispatch(getDetail(id));
},[dispatch, id])


let detalle = useSelector((state) => state.countryDetail)
if(!detalle){
    detalle = {
        idPais: "NOT",
        name: "Not Found",
        imagen: "https://www.seekpng.com/png/detail/212-2123432_404-error-error-404-in-png.png",
        continente: "Not Found",
        capital: "Not Found",
        subregion: "Not Found ",
        area: 0,
        poblacion: 0,
        activities: []
      }
}

const actividades = useSelector((state) => state.activities)


useEffect( ()=>{
    return function (){dispatch(detailDelete())}  ;
    
}, [dispatch])

return(
  
    <div>
        <Link to={'/home'}>
            <button className={S.botonVolver}>Volver</button>
        </Link>


            <div>
                    <div className={S.contenedorCardDetail} key={detalle.idPais} >
                        <img className={S.bandera} src={detalle.imagen} alt="bandera" />
                        <h2>{detalle.name}</h2>
                        <h3>Código: {detalle.idPais}</h3>
                        <h3>Continente: {detalle.continente}</h3>
                        <h3>Capital: {detalle.capital}</h3>
                        <h3>Subregión: {detalle.subregion}</h3>
                        <h3>Área: {detalle.area} km2</h3>
                        <h3>Población: {detalle.poblacion} habitantes</h3>

                        {detalle.activities?.map(e => 
                        <div className={S.actividades} key={detalle.idPais} >
                            <h4><u>Actividad turística:</u> {e.name}</h4>
                            <h5><u>Dificultad:</u> {e.dificultad}</h5>
                            <h5><u>Duración:</u> {e.duracion} horas</h5>
                            <h5><u>Temporada:</u> {e.temporada}</h5>
                        </div>
                            )}          
                    </div>
            </div>
    </div>
    
)
}
