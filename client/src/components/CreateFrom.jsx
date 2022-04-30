import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import S from '../../../client/src/styles/CreateForm.module.css';

export default function CreateForm(){

    return(

        <div className={S.containerGeneral}>

            <div className={S.containerForm}>

            <h2 className={S.tituloForm}>¡Creá tu propia actividad!</h2>

            <form action="" className={S.formulario}>


                <label htmlFor="">Nombre de la actividad:</label>
                <input type="text" />
                
                <label htmlFor="">Dificultad (1/5):</label>
                <div className={S.rango}>
                    <p className={S.numrangoUno}>1</p>
                    <p className={S.numrangoDos}>2</p>
                    <p className={S.numrangoTres}>3</p>    
                    <p className={S.numrangoCuatro}>4</p>
                    <p className={S.numrangoCinco}>5</p>
                </div>
                <input type="range" min="1" max="5" />

                <label htmlFor="">Duración:</label>
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
                </select>


                {/*PONER PARA SELECCIONAR PAIS PARA LA ACTIVIDAD*/}


                    <h3 className={S.listo}>¿Listo?</h3>
                <div className={S.btnCreateForm}>
                    <button>Crear Actividad</button>
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
