import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../../../client/src/actions/index";
import { useDispatch } from 'react-redux';
import Activities from '../../../client/src/components/Activity.jsx';
import S from '../../../client/src/styles/Card.module.css';


// function Countries(props) {

//     if (props.countryDetails) {
//         return (
//             <div className={S.containerCards}>
//                 {props.countryDetails.map(e =>

//                      <div className={S.card} key={S.idPais}>
//                         <img className={S.cardImg} src={e.flags[0]} alt="bandera" />
//                         <h2 className={S.cardNombre}>{e.name.common}</h2>
//                         <h3 className={S.cardCapital}>Capital: {e.capital}</h3>
//                         <h3 className={S.cardContinente}>Continente: {e.continents}</h3>
//                      </div>

//                 )
//                 }
        
//             </div>
//         )}
//           return <div>
//                    <p>No hay paises</p>
//                 </div>
// }
// function mapStateToProps(state) {
//     return {
//         countryDetails: state.countryAll
//     }
// }
// export default connect(mapStateToProps, null)(Countries)

export default function Countries({idPais, name, imagen, continente}){


    return(
        <div className={S.containerCards}>
        <Link to={'/home/' + idPais}>
        <div className={S.card} key={idPais} >
                    <img className={S.cardImg} src={imagen} alt="bandera" />
                    <h2 className={S.cardNombre}>{name}</h2>
                    <h3 className={S.cardContinente}>Continente: {continente}</h3>
               


        </div>
            </Link>

        
        </div>
    )


}