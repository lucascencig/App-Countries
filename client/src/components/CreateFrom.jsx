import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {postActivity} from '../../../client/src/actions/index';
import Activities from '../../../client/src/components/Activity.jsx';
import S from '../../../client/src/styles/CreateForm.module.css';

export default function CreateForm(){

    const dispatch = useDispatch();

    const [localState, setLocalState] = useState({
        ID: "",
        name: "",
        dificultad: "",
        duracion: "",
        temporada: ""
    }) 

    async function handleSubmit(e){
        setLocalState({
            ID: "",
            name: "",
            dificultad: "",
            duracion: "",
            temporada: ""
        })
        e.preventDefault()
        dispatch(postActivity(localState))
        alert("Actividad creada");
    }

    async function handleChange(e){
        setLocalState({
            ...localState,
            [e.target.name]: e.target.value
        })
    }

    
    return(

        <div className={S.containerGeneral}>

            <div className={S.containerForm}>

            <h2 className={S.tituloForm}>¡Creá tu propia actividad!</h2>

            <form onSubmit={handleSubmit} className={S.formulario}>


                <label htmlFor="">Nombre de la actividad:</label>
                <input onChange={handleChange} value={localState.name} name="name" type="text" />
                
                {/* <label htmlFor="">Dificultad (1/5):</label>
                <div className={S.rango}>
                    <p className={S.numrangoUno}>1</p>
                    <p className={S.numrangoDos}>2</p>
                    <p className={S.numrangoTres}>3</p>    
                    <p className={S.numrangoCuatro}>4</p>
                    <p className={S.numrangoCinco}>5</p>
                </div>
                <input onChange={handleChange} value={localState.dificultad} name="dificultad" type="text" min="1" max="5" /> */}

                {/* <label htmlFor="">Duración:</label>
                <select className={S.selectDuracion} name="" id="">
                    <option value="">1-2Hs</option>
                    <option value="">2-3Hs</option>
                    <option value="">3-4Hs</option>
                    <option value="">4-5Hs</option>
                </select>
                

                <label htmlFor="">Temporada:</label>
                <select className={S.selectTemporada} name="" id="">
                    <option value="">Verano</option>
                    <option value="">Invierno</option>
                    <option value="">Primavera</option>
                    <option value="">Otoño</option>
                </select> */}

            <label htmlFor="">Dificultad:</label>
                    <input type="text" onChange={handleChange} value={localState.dificultad} name="dificultad"/>

             <label htmlFor="">Duración:</label>
                    <input onChange={handleChange} type="text" value={localState.duracion} name="duracion" />
                

                <label htmlFor="">Temporada:</label>
                    <input type="text" onChange={handleChange} value={localState.temporada} name="temporada"/>
               
                    <Activities />
                {/*PONER PARA SELECCIONAR PAIS PARA LA ACTIVIDAD*/}

                {/*<h3 className={S.listo}>¿Listo?</h3> */}
                <div className={S.btnCreateForm}>
                    {/* <button onc>Crear Actividad</button> */}
                    <input value="Crear Actividad" type="submit" />
                </div>

                <div className={S.btnVolver}>
                    <Link to={'/home'}>
                    <button>Volver</button>
                    </Link>
                </div>
            </form>


        </div>
        
        </div>
    )

}
