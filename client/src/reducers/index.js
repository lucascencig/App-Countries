const initialState = {
    countryAll: [],
    countryDetail: [],
    countryName: [],
    activities: [],
    continentFiltro: []
    
   
}

export const rootReducer  = (state = initialState, action) => {
    switch(action.type){

        case 'GET_COUNTRIES':
            return ({
                ...state,
                countryAll: action.payload
            })

            case 'GET_COUNTRY_NAME':
                const country = state.countryAll
                return({
                    ...state,
                    countryName: country,
                    countryAll: action.payload
                })

            case 'GET_COUNTRY_DETAIL':
                return ({
                    ...state,
                    countryDetail: action.payload
                })


            case 'GET_ALL_ACTIVITIES':

                return({
                    ...state,
                    activities: action.payload
                })
                
            case 'ORDER_BY_ASCENDENTE':
               
                const countryOrden = action.payload === 'asc' ? state.countryAll.sort((a,b)=>{
                    if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) return 1
                    if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) return -1
                   
                }) : state.countryAll.sort((a,b)=>{
                    if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) return -1
                    if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) return 1;
                
                })

                const countryFilterOrden = action.payload === 'asc' ? state.continentFiltro.sort((a,b)=>{
                    if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) return 1
                    if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) return -1
                   
                }) : state.continentFiltro.sort((a,b)=>{
                    if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) return -1
                    if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) return 1;
                
                })
                
                return({
                    ...state,
                    countryAll: countryOrden,
                    continentFiltro: countryFilterOrden
                })
//     if(a.name.common.toLowerCase() > b.name.common.toLowerCase()) return 1
//     else return -1
                
// }) : state.countryAll.sort((a,b)=>{
//     if(a.name.common.toLowerCase() < b.name.common.toLowerCase()) return 1
//     else return -1

// })

                case 'ORDER_BY_POBLACION':
                    const countryOrdenPoblacion = action.payload === 'asc' ? state.countryAll.sort((a,b)=>{
                        if(a.population > b.population) return 1
                        if(a.population < b.population) return -1
                    
                    }) : state.countryAll.sort((a,b)=>{
                        if(a.population > b.population) return -1
                        if(a.population < b.population) return 1;
                    
                    })

                    const countryOrdenPoblacionDesc = action.payload === 'asc' ? state.continentFiltro.sort((a,b)=>{
                        if(a.population > b.population) return 1
                        if(a.population < b.population) return -1
                    
                    }) : state.continentFiltro.sort((a,b)=>{
                        if(a.population > b.population) return -1
                        if(a.population < b.population) return 1;
                    
                    })
                    return({
                        ...state,
                        countryAll: countryOrdenPoblacion,
                        continentFiltro: countryOrdenPoblacionDesc
                    })

                    case 'ORDER_BY_CONTINENT':
                        const country_All = state.countryAll
                        const filtroContintent = action.payload === 'Todos' ? 
                        state.countryAll : country_All.filter(country => {
                   
                            if(country.continents.length > 0){                                
                                if(country.continents.find(e => e === action.payload)) return country;
                            }
                            console.log(country)
                        })
                        return({
                            ...state,
                            continentFiltro: filtroContintent
                        })
                    
        default: return state
    }
}

