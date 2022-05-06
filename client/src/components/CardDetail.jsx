import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Countries from "./Card";
import Activities from "./Activity";
import { getDetail } from "../../../client/src/actions/index";
import S from '../../../client/src/styles/CardDetail.module.css';


export default function CardDetail(props){

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id));

},[])

const detalle = useSelector((state) => state.countryDetail)
const detalleE = detalle;

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
                        <h4>Actividades turísticas: {e.Activities}</h4> {/*FIJARSE COMO PONER LA ACTIVIDAD TURISTICA ASOCIADA*/}
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