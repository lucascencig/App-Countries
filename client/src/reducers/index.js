const initialState = {
    countryAll: [],
    countryDetail: [],

}

export const rootReducer  = (state = initialState, action) => {
    switch(action.type){

        case 'GET_COUNTRIES':
            return ({
                ...state,
                countryAll: action.payload
            })

        case 'GET_COUNTRY_DETAIL':
            return ({
                ...state,
                countryDetail: action.payload
            })

        

        default: return state
    }
}

