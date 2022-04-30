export function  getApiTotal(){
    return function(dispatch){
        return fetch("https://restcountries.com/v3/all")
        .then(res => res.json())
        .then(country =>
            dispatch({type: 'GET_COUNTRIES', payload: country}))
    }
}

// export function getCountryDetail(id){
//     return function(dispatch){
//         return fetch("https://restcountries.com/v3/all" + id)
//         .then(res => res.json())
//         .then(detail => {dispatch({type: 'GET_MOVIE_DETAIL', payload: detail})})
//     }
// }