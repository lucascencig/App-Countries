import React from "react";

import { Link } from "react-router-dom";


export default function Paginacion({countriesPorPagina ,  allCountries , paginado}) {
const pageNumbers = []
    for (let i = 0 ; i < Math.ceil(allCountries/countriesPorPagina) ; i++){
   pageNumbers.push(i+1)
   
}
return (
          
    <nav  >
     <ul >
            {
                pageNumbers && pageNumbers.map(n => (
                 <li  key={n} >
                    <button  onClick= {() => paginado(n)} >{n}</button>
                    </li>
                ))
                
            }
            
        </ul>
    </nav>
            
)
}