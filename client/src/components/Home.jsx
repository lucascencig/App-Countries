import {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getApiTotal} from '../actions/index';
import Countries from '../components/Card'
import Paginacion from "./Paginado";
import SearchBar from "../../../client/src/components/SearchBar.jsx";
import Nav from "../../../client/src/components/Nav.jsx";
import S from '../../../client/src/styles/Home.module.css'



export default function Home(){
const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countryAll)


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


const [paises, setPaises] = useState('');
function onSearch(name) {
    

    fetch(`https://restcountries.com/v3/name/${name}`)
    .then(r => r.json())
    .then((r_json) => {
      if(r_json.data !== undefined){
        const paises = {
        bandera: r_json.flags[1],
        nombre: r_json.name.common,
        capital: r_json.capital,
        continente: r_json.continents
        };
        setPaises(oldCountries => [...oldCountries, paises]);
      } else {
        alert(`¡Pais no encontrado o "${name}" no es un nombre de un pais!`);
      }
    });
  

    }

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
             {/* <div className={S.buscador}>
                 <label htmlFor="">Buscar Pais</label>
                 <input type="text" name="" id="" />
                 <button>Buscar</button>
             </div> */}
            
             
             <Nav onSearch={onSearch}/>

             <div className={S.crearConteiner}>
                 <Link to={'/create'}>
                 <button className={S.btnCrear}>Crear Actividad</button>
                 </Link>
             </div>

         </div>
        
            <Paginacion  countriesPorPagina={countriesPorPagina} allCountries={allCountries.length} paginado={paginado}/>

         <div className={S.conteinerCards}>

                {currentCountries?.map((e) => {
                    return(
                        
                        <div >
                        <Countries 
                        
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