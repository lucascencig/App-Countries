import {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getApiTotal, ordenAsc, ordenPoblacion, ordenContinente, getActivities, ordenActividades} from '../actions/index';
import Card from '../../../client/src/components/Card.jsx';
import Countries from '../components/Card';
import Activity from '../../../client/src/components/Activity.jsx';
import Paginacion from "./Paginado";
import SearchBar from "../../../client/src/components/SearchBar.jsx";


import S from '../../../client/src/styles/Home.module.css'



export default function Home(){
const dispatch = useDispatch();
const allCountries = useSelector((state) => state.countryAll)
const continentFiltro = useSelector((state) => state.continentFiltro)
const activities = useSelector((state)=> state.activities)
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

useEffect(()=>{
    dispatch(getActivities());
},[])


function handleFilterOrder(e){
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
}

function handleOrdenActivity(e){
    e.preventDefault();
    dispatch(ordenActividades(e.target.value))
    setCurrentPage(1)
    setOrden(`${e.target.value}`)
}




return(
    <div className={S.containerHome}>

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
        <select onChange={(e)=>{handleOrdenActivity(e)}}>
            <option value="Actividades">Actividades</option>
            {activities.map((e)=>{
                return(
                    <option value={e.name} key={e.ID}>{e.name}</option>
                )
            })}
        </select>
        </div>
        
        <SearchBar />

     

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
                    
                    <div key={e.idPais}>

                    <Countries 
                    idPais={e.idPais}
                    imagen={e.imagen}
                    name={e.name}
                    continente={e.continente}
                    poblacion={e.poblacion}
                    />

                    </div>
                ) 
            })}
</div>


</div>
)
}
