import * as type from '../types'

const defaultState = {
    data: [],
};

const loginReducer = (state, action) => {
    switch(action.type){
        case type.LOGIN_USER:
            return {
                ...state,
                data: [...state.data, action.payload],
            }   
        default:
            return defaultState;
    }
}


export default loginReducer;
