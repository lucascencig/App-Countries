import axios from 'axios';

export  function  getApiTotal(){
    return function(dispatch){
        return fetch("http://localhost:3001/countries")
        .then(res => res.json())
        .then(country =>
            dispatch({type: 'GET_COUNTRIES', payload: country}))
    }
    
}

export  function getCountriesName(name){
    return function(dispatch){
        return fetch(`http://localhost:3001/countries/${name}`)
        .then(r => r.json())
        .then((r_json) => {
            
            dispatch({type: 'GET_COUNTRY_NAME', payload: r_json})
        })
    }
}

export  function postActivity(payload){
    return async function(dispatch){
        try{
            const respuesta = await axios.post('http://localhost:3001/activity', payload)
            return respuesta;
            
        }
        catch(err){
            console.log(err);
        }
    }

}


export function getActivities(payload){
    return function(dispatch){
        return fetch('http://localhost:3001/activity')
        .then(r => r.json())
        .then((r_json) => {
            
            dispatch({type: 'GET_ALL_ACTIVITIES', payload: r_json})
        })
    }
}


export function getDetail(id){
    return function(dispatch){
                return fetch(`http://localhost:3001/countries/${id}`)
                .then(r => r.json())
                .then((r_json) => {
                    
                    dispatch({type: 'GET_COUNTRY_DETAIL', payload: r_json})
                })
    }
}

export function ordenAsc(payload){
   return {type: 'ORDER_BY_ASCENDENTE', payload: payload}
}

export function ordenPoblacion(payload){
    return {type: 'ORDER_BY_POBLACION', payload: payload}
 }

export function ordenContinente(payload){
    return {type: 'ORDER_BY_CONTINENT', payload: payload}
}

export function ordenActividades(payload){
    return {type: 'ORDEN_BY_ACTIVITY', payload: payload}
}
// export function getDetail(id) {

//     return function(dispatch){
//         return fetch('http://localhost:3001/home/' + id)
//         .then(r => r.json())
//         .then((r_json) => {
            
//             dispatch({type: 'GET_COUNTRY_DETAIL', payload: r_json})
//         })
//     };
// };

        // fetch(`https://restcountries.com/v3/name/${name}`)
        // // console.log(`https://restcountries.com/v3/name/${name}`)
        // .then(r => r.json())
        // .then((r_json) => {
        //     dispatch({type: 'GET_COUNTRY_NAME', payload: r_json})
        //     // const paises = {
        //     //    name: r_json?.map(e => e.name.common)
        //     // }
        //     // setPaises(oldCountries => [...oldCountries, paises]);
        // //   } else {
        // //     alert(`¡Pais no encontrado o "${name}" no es un nombre de un pais!`);
        // //   }
        // });



// export function getCountryDetail(id){
//     return function(dispatch){
//         return fetch("https://restcountries.com/v3/all" + id)
//         .then(res => res.json())
//         .then(detail => {dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})})
//     }
// }