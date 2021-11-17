import * as type from '../types'

const defaultState = {
    // isLoading: false,
    data: [],
    // error: null
};

const userReducer = (state, action) => {
    switch(action.type){
        case type.REGISTER_USER:
            return {
                // isLoading: false,
                data: [...state.data, action.payload],
                // error:null
            }
        default:
            return defaultState;
    }
}


export default userReducer;
