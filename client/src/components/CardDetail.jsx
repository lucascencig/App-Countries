import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Countries from "./Card";
import Activities from "./Activity";
import { getDetail } from "../../../client/src/actions/index";
import S from '../../../client/src/styles/CardDetail.module.css';


export default function CardDetail(props){
console.log(props)

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getDetail(props));
},[dispatch])

const detalle = useSelector((state) => state.countryDetail)


return(

    <div>

        {
            detalle.lenght > 0 ?
            <div>
                <img src={detalle[0].flags[1]? detalle[0].flags[1] : detalle[0].flags[0]}/>
                <h2>Nombre: {detalle[0].name}</h2>
                <h3>capital: {detalle[0].capital[0]}</h3>
                <h3>poblacion: {detalle[0].population}</h3>
          
            </div>
                : <h4 className={S.cargando}>cargando...</h4>
        }

        <Link to={'/home'}>
            <button>Volver</button>
        </Link>
    </div>
)



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
}