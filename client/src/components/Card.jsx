import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getActivities } from "../../../client/src/actions/index";
import { useDispatch } from 'react-redux';
import Activities from '../../../client/src/components/Activity.jsx';
import S from '../../../client/src/styles/Card.module.css';



export default function Countries({idPais, name, imagen, continente, poblacion}){
    return(
        <div className={S.containerCards}>
            <Link to={'/home/' + idPais}>
                <div className={S.card} key={idPais} >
                    <img className={S.cardImg} src={imagen} alt="bandera" />
                    <h2 className={S.cardNombre}>{name}</h2>
                    <h3 className={S.cardContinente}>Continente: {continente}</h3>
                    <h3 className={S.cardContinente}>Poblacion: {poblacion}</h3>

                </div>
            </Link>
        </div>
    )
}