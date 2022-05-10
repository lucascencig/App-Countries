import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {postActivity, getActivities, getApiTotal} from '../../../client/src/actions/index';
import Activities from '../../../client/src/components/Activity.jsx';
import S from '../../../client/src/styles/CreateForm.module.css';

export default function CreateForm(){
    
//VALIDACION DE FORMULARIO:
function validarInputName(e){
    if(/\d/.test(e.target.value)){
        setError('Los datos no son validos.')
    }else{
        setError('')
    }
    handleChange(e)
}

function validarInputDificultad(e){
    if(!/\d/.test(e.target.value)){
        setError('Los datos no son validos1')
    }else{
        setError('')
    }
    handleChange(e)
}

function validarInputTemporada(e){
    if(e.target.value.toLowerCase() === 'verano' || e.target.value.toLowerCase() === 'invierno' || e.target.value.toLowerCase() === 'otoño' || e.target.value.toLowerCase() === 'primavera' ){
       setError('')
    }else{
        setError('Debe tener un valor de temporada')
    }
    handleChange(e)
}

//RESTO DE FUNCIONES:
const dispatch = useDispatch();
const activi = useSelector(state => state.countryAll)


const [error, setError] = useState('')

    const [localState, setLocalState] = useState({
        ID: "",
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: [],
    }) 
    

    async function handleSubmit(e){
        
        if(localState.countries.length > 0 &&  typeof localState.name === 'string' && localState.name.length > 0){
        dispatch(postActivity(localState))
        setLocalState({
            ID: "",
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countries: []
        })
        e.preventDefault()
        
        alert("Actividad creada");
    }else{
        alert('Todos los campos deben llenares y debe selecionar al menos un pais para la actividad.')
    }
    }
    

    async function handleChange(e){
        setLocalState({
            ...localState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        dispatch(getActivities());
    },[])
    
    useEffect(()=>{
        dispatch(getApiTotal());
    },[])
    
    function countrySelect(e){
        if(!localState.countries.includes(e.target.value)){
            setLocalState({
                ...localState,
                countries: [...localState.countries, e.target.value]
            })
        }
        console.log(localState)
    }
    
    return(

        <div className={S.containerGeneral}>

            <div className={S.containerForm}>

            <h2 className={S.tituloForm}>¡Creá tu propia actividad!</h2>


            <form onSubmit={handleSubmit} className={S.formulario} id="form">

                {/* NOMBRE DE LA ACTIVIDAD */}
                <label htmlFor="">Nombre de la actividad:</label>
                <input  onChange={validarInputName} value={localState.name} name="name" type="text" placeholder="Nombre" />
                    <div className={S.error}>
                        <p>{error !== 'Los datos no son validos.'? null :  <p >El nombre no puede estar vacio ni contener numeros.</p>}</p>
                    </div>

            
                {/* DIFICULTAD */}
                <label htmlFor="">Dificultad (1/5):</label>
                    <div className={S.rango}>
                        <p className={S.numrangoUno}>1</p>
                        <p className={S.numrangoDos}>2</p>
                        <p className={S.numrangoTres}>3</p>    
                        <p className={S.numrangoCuatro}>4</p>
                        <p className={S.numrangoCinco}>5</p>
                    </div>
                    <input  className={S.inpRange} onChange={validarInputDificultad} value={localState.dificultad} name="dificultad" type="range" min="1" max="5"  />
                        <div className={S.error}>
                            <p>{error !== 'Los datos no son validos1'? null  : <p className={S.error}>La dificultad es obligatoria de 1 a 5.</p>}</p>
                        </div>


                {/* DURACION */}
                    <label htmlFor="">Duración: (Horas)</label>
                    <div className={S.rangoDuracion}>
                        <p className={S.numrangoUno}>1</p>
                        <p className={S.numrangoDos}>2</p>
                        <p className={S.numrangoTres}>3</p>    
                        <p className={S.numrangoCuatro}>4</p>
                        <p className={S.numrangoCinco}>5</p>
                    </div>
                    <input  className={S.inpRange} onChange={handleChange} type="range" value={localState.duracion} name="duracion" min="1" max="5"/>
                    {/* <p className={S.error}>La duración es obligatoria de 1 a 5.</p> */}


                {/* TEMPORADA */}
                <label htmlFor="">Temporada: "Verano", "Invierno", "Otoño", "Primavera"</label>
                    <input  type="text" onChange={validarInputTemporada} value={localState.temporada} name="temporada" placeholder="Temporada"/>
                    {/* <p className={S.error}>Debe tener una temporada para la actividad.</p> */}
                        <div className={S.error}>
                            <p>{error !== 'Debe tener un valor de temporada'? null  : <p className={S.error}>Debe tener una temporada para la actividad</p> } </p>
                        </div>


                {/* SELECCION DE PAIS */}
                    <label htmlFor="">¿A que país/países quieres agregarle la actividad?</label>
                <select id="select" className={S.selectPais} onChange={(e) => countrySelect(e)}>
                    <option disabled defaultValue="pais">Paises</option>
                    {activi?.map((e) => 
                    <option value={e.idPais} key={e.idPais}>{e.name}</option>
                    
                    )}
                </select>
                {/* <p className={S.error}>Debe seleccionar al menos un para asignarle la actividad.</p> */}
                <div className={S.paisesSeleccionados}>
                 <p>{localState.countries.join(' ')}  </p> 
                </div>


                {/* BOTON CREAR ACTIVIDAD */}
                <h3 className={S.listo}>¿Listo?</h3>
                <div className={S.btnCreateForm}>
                    {/* <button onChange={getActivities}>Crear Actividad</button> */}
                    <button id="boton" onChange={getActivities} value="Crear Actividad" type="submit" >Crear Actividad</button>
                </div>
                {/* <p className={S.error}>¡Debe completar todos los datos para crear!</p> */}


                        {/* BOTON VOLVER */}
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
