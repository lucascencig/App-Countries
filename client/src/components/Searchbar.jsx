import React, { useState } from 'react';
import S from '../../../client/src/styles/SearchBar.module.css';



export default function SearchBar({ onSearch }) {
  let [pais, setPaises] = useState('');

  return (
    <form  onSubmit={(e) => {
      e.preventDefault();
      onSearch(pais);
      setPaises('');
    }}>
      <input 
        type="text"
        placeholder="Ciudad..."
        value={pais}
        onChange={e => setPaises(e.target.value)}

      />
      <input  type="submit" value="Buscar" />

    </form>

  );
}