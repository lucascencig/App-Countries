import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {getCountriesName} from '../../../client/src/actions/index';
import { Link } from 'react-router-dom';
import { getApiTotal } from '../../../client/src/actions/index';
import S from '../../../client/src/styles/SearchBar.module.css';



export default function SearchBar({ onSearch }) {
  let [pais, setPaises] = useState('');


const dispatch = useDispatch(); 

function handleChange(e){
  e.preventDefault();
  setPaises(e.target.value)
}

function handleSubmit(e){
  e.preventDefault();
  try{
    dispatch(getCountriesName(pais))
  }
  catch(err){
    alert('No existe un pais con ese nombre')
  }

}

function volverPaises(e){
  e.preventDefault();
  try{
    dispatch(getApiTotal())
  }
  catch(err){
    throw new Error(err);
  }
}



  return (
  <form>
    
    <input className={S.input} type="text" placeholder='Escribir...' value={pais} onChange={handleChange}/>
    <button className={S.botonBuscar} type='Submit' onClick={handleSubmit} >Buscar</button>

      
    <button className={S.botonTodosLosPaises} onSubmit={volverPaises}>Recargar</button>
    
  </form>
  )
}