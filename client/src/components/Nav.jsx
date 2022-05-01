import React from 'react';
import SearchBar from '../../../client/src/components/SearchBar.jsx';


export default function Nav({ onSearch }) {
    return (

        <div >
            <SearchBar onSearch={onSearch} />
        </div>
    );

};