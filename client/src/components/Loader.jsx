import React from "react";
import S from '../../../client/src/styles/Loader.module.css';




export default function Loader(){

    // Window.load = function(){
    //     var loader = document.getElementById('contenedor_carga');
 
    //     loader.style.visibility = "hidden";
    //     loader.style.opacity = '0';
    //  }
    
    window.addEventListener('load', function(){
        document.getElementById('contenedor_carga')
    })
    
    return(
    
        
        <div id="contenedor_carga" className={S.contenedor_carga}>
           <div id="carga" className={S.carga}></div>
        </div> 
)
}
    




