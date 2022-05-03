import React, { useState, useEffect } from "react";
import { getActivities } from "../../../client/src/actions/index";
import { useDispatch, useSelector } from 'react-redux';


export default function Activities(name, dificultad ,duracion, temporada ){

    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities)
    
    let [activity, setActivity] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: ""
});


useEffect(()=>{
    dispatch(getActivities());
},[dispatch])

console.log(activity)
function actividadCreada(e){
    
    console.log(setActivity())
    e.preventDefault()
    dispatch(getActivities(activity))
    setActivity({
        ...activity,
        [e.target.value]: e.target.value
    });
}
  


    return(
        <div>

         
           <button onChange={actividadCreada}>Ver actividades</button>


        </div>

    )
}