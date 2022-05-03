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
                
            // case 'GET_DETAIL':
            //     return{
            //         ...state,
            //         detail: action.payload
            //     }
        
        

        default: return state
    }
}

