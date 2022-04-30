import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getApiTotal} from '../actions/index';
import Countries from '../components/Card'
import Paginacion from "./Paginado";
import S from '../../../client/src/styles/Home.module.css'



export default function Home(){
const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countryAll)

const [curretPage, setCurrentPage] =useState(1)
const [countriesPorPagina, setFoodsPerPage] =useState(9)
const indexCountriesLast = curretPage * countriesPorPagina
const indexCountriesFirst = indexCountriesLast - countriesPorPagina
const currentCountries = allCountries.slice(indexCountriesFirst, indexCountriesLast)
const paginado = (pageNumber)=>{
setCurrentPage(pageNumber)
}

useEffect(()=>{
    dispatch(getApiTotal());
},[dispatch])



    return(
    <div className={S.containerHome}>
             <h1 className={S.tituloPrincipal}>Countries App</h1>

             <div className={S.navbar}>

         <div className={S.selectOne}>
             <label htmlFor="">Ordenar por continente:</label>
                 <select name="" id="">
                     <option value="">Todos</option>
                     <option value="">America</option>
                     <option value="">Europa</option>
                     <option value="">Asia</option>
                     <option value="">Africa</option>
                     <option value="">Africa</option>
                     <option value="">Oceania</option>
                     <option value="">Antartida</option>
                 </select>
             </div>

             <div className={S.selectTwo}>
                 <label htmlFor="">Orden alfabético</label>
                 <select name="" id="">
                     <option value="">Aa-Zz</option>
                     <option value="">Zz-Aa</option>
                 </select>
             </div>


             <div className={S.selectThree}>
             <label htmlFor="">Poblacion</label>
                 <select name="" id="">
                     <option value="">Mayor población</option>
                     <option value="">Menor población</option>
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
        
         <div>
            <Paginacion countriesPorPagina={countriesPorPagina} allCountries={allCountries.length} paginado={paginado}/>
                {currentCountries?.map((e) => {
                    return(
                        <Countries 
                        flags={e.flags[0]}
                        name={e.name.common}
                        capital={e.capital}
                        continents={e.continents}
            
                    />
            
                    ) 
                })}
       </div>


    </div>



    
    )
    
}

// export default connect(null, {getApiTotal})(Home);