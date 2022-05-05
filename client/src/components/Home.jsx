import {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getApiTotal, ordenAsc} from '../actions/index';
import Card from '../../../client/src/components/Card.jsx';
import Countries from '../components/Card';
import Activity from '../../../client/src/components/Activity.jsx';
import Paginacion from "./Paginado";
import SearchBar from "../../../client/src/components/SearchBar.jsx";
import Nav from "../../../client/src/components/Nav.jsx";
import Loader from '../../../client/src/components/Loader.jsx';

import S from '../../../client/src/styles/Home.module.css'



export default function Home(){
const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countryAll)
const [orden, setOrden] = useState(''); 
const [paises, setPaises] = useState([]);
const [curretPage, setCurrentPage] =useState(1)
const [countriesPorPagina, setcountriesPorPagina] =useState(9)
const indexCountriesLast = curretPage * countriesPorPagina
const indexCountriesFirst = indexCountriesLast - countriesPorPagina
const currentCountries = allCountries.slice(indexCountriesFirst, indexCountriesLast)
const paginado = (pageNumber)=>{
setCurrentPage(pageNumber)
}


useEffect(()=>{
    dispatch(getApiTotal());
},[dispatch])




function handleFilterOrder(e){
    e.preventDefault()
    dispatch(ordenAsc(e.target.value))
    setCurrentPage(1)
    setOrden(`${e.target.value}`)
}

    return(
        <div className={S.containerHome}>
        {/* <Loader /> */}




             <h1 className={S.tituloPrincipal}>Countries App</h1>

             <div className={S.navbar}>

             <div className={S.selectTwo}>
                 <label htmlFor="">Orden alfabético</label>
                 <select defaultValue="Orden Alfafebético" onChange={(e) => handleFilterOrder(e)} name="" id="">
                    <option>Orden</option>
                     <option value="asc">Aa-Zz</option>
                     <option value="desc">Zz-Aa</option>
                 </select>
             </div>

            <div className={S.selectOne}>
                <label htmlFor="">Ordenar por continente:</label>
                    <select name="" id="" key="1">
                        <option value="" >Todos</option>
                        <option value="">America</option>
                        <option value="">Europa</option>
                        <option value="">Asia</option>
                        <option value="">Africa</option>
                        <option value="">Africa</option>
                        <option value="">Oceania</option>
                        <option value="">Antartida</option>
                    </select>
                </div>


             <div className={S.selectThree}>
             <label htmlFor="">Poblacion</label>
                 <select name="" id="">
                     <option value="">Mayor población</option>
                     <option value="">Menor población</option>
                 </select>
             </div>
            
            
             <SearchBar />

             {/* <Nav onSearch={onSearch}/> */}

             <div className={S.crearConteiner}>
                 <Link to={'/create'}>
                 <button className={S.btnCrear}>Crear Actividad</button>
                 </Link>
             </div>

         </div>
        
            <Paginacion  countriesPorPagina={countriesPorPagina} allCountries={allCountries.length} paginado={paginado} />

            

         <div className={S.conteinerCards}>


     


                {currentCountries?.map((e) => {
                    return(
                        
                        <div key={e.cca3}>
                     
                        <Countries 
                        id={e.cca3}
                        paises={paises}
                        flags={e.flags[1]}
                        name={e.name.common}
                        capital={e.capital}
                        continents={e.continents}
                        />
                       
                       

                        </div>
                    ) 
                })}
       </div>
    


 
    </div>



    )
    
}

// export default connect(null, {getApiTotal})(Home);