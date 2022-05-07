import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Countries from "./Card";
import Activities from "./Activity";
import { getDetail, getActivities } from "../../../client/src/actions/index";
import S from '../../../client/src/styles/CardDetail.module.css';


export default function CardDetail(props){

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id));

},[])

const detalle = useSelector((state) => state.countryDetail)
const detalleE = detalle;

const actividades = useSelector((state) => state.activities)
console.log(actividades)



return(

    <div>
    
   

        <Link to={'/home'}>
            <button className={S.botonVolver}>Volver</button>
        </Link>

        
            <div>

   
                {detalle?.map(e =>

                    <div className={S.contenedorCardDetail} key={e.cca3} >

                        <img className={S.bandera} src={e.flags[1]} alt="bandera" />
                        <h2>{e.name.common}</h2>
                        <h3>Código: {e.cca3}</h3>
                        <h3>Continente: {e.continents}</h3>
                        <h3>Capital: {e.capital}</h3>
                        <h3>Subregión: {e.subregion}</h3>
                        <h3>Área: {e.area} km2</h3>
                        <h3>Población: {e.population} habitantes</h3>
                       
                        {actividades.map(e =>
                        <div className={S.actividades}>
    <h4><u>Actividad turística:</u> {e.name}</h4>
    <h5><u>Dificultad:</u> {e.dificultad}</h5>
    <h5><u>Duración:</u> {e.duracion} horas</h5>
    <h5><u>Temporada:</u> {e.temporada}</h5>
    </div>
              )}          
                    </div>
                )}
            </div>

                
        


    </div>
)

}

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getDetail(flags, name, capital));
//     }, [dispatch]);

//  const detalle = useSelector(state => state.countryDetail);  


//     return(
//         <div>

//             <div className={S.contenedorDetail}>

//                 <img  src={flags[1]} alt="bandera" />
//                 <h2 >nombre: {name.common}</h2>
//                 <h3 >Capital: {capital}</h3>
                
                
//                 {/* <Activities  /> */}
//             </div>
        
//         </div>

//     )
// }