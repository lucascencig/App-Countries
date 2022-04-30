import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {getApiTotal} from '../actions/index';
import Countries from '../components/Card'
import S from '../../../client/src/styles/Home.module.css'


function Home(props){

function onClick(){
    props.getApiTotal()
}

    return(
        
        <div className={S.containerHome}>
            <div className={S.navbar}>

        <div className={S.selectOne}>
            <label htmlFor="">Ordenar por:</label>
                <select name="" id="">
                    <option value="">algo</option>
                    <option value="">otra</option>
                    <option value="">y otra</option>
                    <option value="">y otra otra</option>
                </select>
            </div>

            <div className={S.selectTwo}>
                <label htmlFor="">Orden alfabético</label>
                <select name="" id="">
                    <option value="">Aa-Zz</option>
                    <option value="">Zz-Aa</option>
                </select>
            </div>

            <div className={S.buscador}>
                <label htmlFor="">Buscar Pais</label>
                <input type="text" name="" id="" />
                <button>Buscar</button>
            </div>

            <div className={S.crearConteiner}>
                <Link to={'/create'}>
                <button className={S.btnCrear}>Crear Actividad</button>
                </Link>
            </div>

        </div>
        <h1 className={S.tituloHome}>Countries</h1>

        <button className={S.btnHome} onClick={onClick}>Mostrar Paises</button>
        <Countries />

  
        </div>
    )
}

export default connect(null, {getApiTotal})(Home);