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
                countryAll: action.payload,
                continentFiltro: action.payload
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
                console.log(action.payload)
                return({
                    ...state,
                    activities: action.payload
                })


                
            case 'ORDER_BY_ASCENDENTE':
                const countryOrden = action.payload === 'asc' ? state.countryAll.sort((a,b)=>{
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return 1
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return -1
                }) : state.countryAll.sort((a,b)=>{
                    if(a.name.toLowerCase() > b.name.toLowerCase()) return -1
                    if(a.name.toLowerCase() < b.name.toLowerCase()) return 1;
                })
                return({
                    ...state,
                    countryAll: countryOrden,
                    continentFiltro: countryOrden
                })




                case 'ORDER_BY_POBLACION':
                    const countryOrdenPoblacion = action.payload === 'asc' ? state.countryAll.sort((a,b)=>{
                        if(a.poblacion > b.poblacion) return 1
                        if(a.poblacion < b.poblacion) return -1
                    }) : state.countryAll.sort((a,b)=>{
                        if(a.poblacion > b.poblacion) return -1
                        if(a.poblacion < b.poblacion) return 1;
                    })
                    return({
                        ...state,
                        countryAll: countryOrdenPoblacion,
                        continentFiltro: countryOrdenPoblacion
                    })




                    case 'ORDER_BY_CONTINENT':
                        const country_All = state.continentFiltro;
                        const filtroContinent =
                        action.payload === "Todos"
                            ? state.countryAll
                            : country_All.filter(
                                (country) => country.continente === action.payload
                            );
                        return {
                        ...state,
                        countryAll: filtroContinent,
                        };




                    case 'ORDEN_BY_ACTIVITY':
                        const countriesAct = state.continentFiltro
                        const activityFilter =
                        action.payload === "Actividades"
                            ? countriesAct
                            : countriesAct.filter(
                                (e) =>
                                e.activities &&
                                e.activities.map((e) => e.name).includes(action.payload)
                            );
                        return {
                        ...state,
                        countryAll: activityFilter
                        };
                    


                        
        default: return state
    }
}

