const initialState = {
    countryAll: [],
    countryDetail: [],
    countryName: [],
    activities: [],
    
   
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
                return({
                    ...state,
                    countryAll: countryOrden
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
                    return({
                        ...state,
                        countryAll: countryOrdenPoblacion
                    })

                    
        default: return state
    }
}

