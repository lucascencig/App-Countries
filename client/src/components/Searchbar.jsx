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
    throw new Error(err)
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
     <input type="text" placeholder='' value={pais} onChange={handleChange}/>
     <button type='Submit' onClick={handleSubmit} >Buscar</button>

      
     <button onSubmit={volverPaises}>Todos los paises</button>
     
   </form>
  )
}