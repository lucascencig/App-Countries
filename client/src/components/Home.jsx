import {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getApiTotal, ordenAsc, ordenPoblacion, ordenContinente} from '../actions/index';
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
const continentFiltro = useSelector((state) => state.continentFiltro)
const [orden, setOrden] = useState(''); 
const [ordenPorPoblacion, setOrdenPorPoblacion] = useState('');
const [filtroClick, setFiltroClick] = useState(false)
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
    console.log(e.target.value)
    e.preventDefault()
    dispatch(ordenAsc(e.target.value))
    setCurrentPage(1)
    setOrden(`${e.target.value}`)

}

function handleFilterPoblacion(e){
    
    e.preventDefault();
    dispatch(ordenPoblacion(e.target.value))
    setCurrentPage(1)
    setOrdenPorPoblacion(`${e.target.value}`)
}

function handleOrdenContinente(e){
    e.preventDefault();
    dispatch(ordenContinente(e.target.value))
    setCurrentPage(1)
    setOrden(`${e.target.value}`)
    filtro()
}

function filtro(){
    setFiltroClick(false)
}

if(continentFiltro.length > 0){

const currentCountries =  continentFiltro.slice(indexCountriesFirst, indexCountriesLast)

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
                    <select  defaultValue="Todos" onChange={(e) => handleOrdenContinente(e)} name="" id="" key="1">
                        <option value="Todos">Todos</option>
                        <option value="South America">South America</option>
                        <option value="North America">North America</option>
                        <option value="Europe">Europa</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">Africa</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctica">Antarctica</option>
                    </select>
                </div>


            <div className={S.selectThree}>
            <label htmlFor="">Poblacion</label>
                <select defaultValue="Orden Alfafebético" onChange={(e) => handleFilterPoblacion(e)} name="" id="">
                    <option>Población</option>
                    <option value="asc">Menor población</option>
                    <option value="desc">Mayor población</option>
                </select>
            </div>
            
            <div className={S.selectFour}>
            <label htmlFor="">Actividades</label>
                <select defaultValue="Actividades"  name="" id="">
                    <option>Actividad</option>
                    <option value="asc"></option>
                    <option value="desc"></option>
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
        
            <Paginacion  countriesPorPagina={countriesPorPagina} allCountries={continentFiltro.length} paginado={paginado} />

            

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
                <select defaultValue="Todos" onChange={(e) => handleOrdenContinente(e)} name="" id="" key="1">
                    <option disabled>Todos</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europa</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctica">Antarctida</option>
                </select>
            </div>


        <div className={S.selectThree}>
        <label htmlFor="">Poblacion</label>
            <select defaultValue="Orden Alfafebético" onChange={(e) => handleFilterPoblacion(e)} name="" id="">
                <option>Población</option>
                <option value="asc">Menor población</option>
                <option value="desc">Mayor población</option>
            </select>
        </div>
        
        <div className={S.selectFour}>
        <label htmlFor="">Actividades</label>
            <select defaultValue="Actividades"  name="" id="">
                <option>Actividad</option>
                <option value="asc"></option>
                <option value="desc"></option>
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