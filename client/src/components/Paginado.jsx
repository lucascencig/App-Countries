import React from "react";
import S from '../../../client/src/styles/Paginado.module.css';


export default function Paginacion({countriesPorPagina ,  allCountries , paginado, curretPage}) {
let pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allCountries/countriesPorPagina) ; i++){
   pageNumbers.push(i+1)
   
}

if(curretPage === 1){
    pageNumbers = pageNumbers.slice(curretPage -1, curretPage + 1)
   
}
if(curretPage > 1 && curretPage < Math.ceil(allCountries/countriesPorPagina)){
    pageNumbers = pageNumbers.slice(curretPage - 2, curretPage + 1)
}
if(curretPage === Math.ceil(allCountries/countriesPorPagina)){
    pageNumbers = pageNumbers.slice(curretPage - 2, curretPage)
}
return (
        
    <nav >
    <ul className={S.botonPagina}>
           <button onClick={()=> paginado('inicio')}>Inicio</button>
           <button onClick={()=> paginado('anterior')}>anterior</button>
           
            {
                pageNumbers && pageNumbers.map(n => (
                
                        <li key={n} >
                            <button  onClick= {() => paginado(n)} >{n}</button>
                        </li>
                    
                ))
            }
            <button onClick={() => paginado('siguiente')}>siguiente</button>
            <button onClick={() => paginado('final')}>Final</button>
        </ul>
    </nav>
            
)
}