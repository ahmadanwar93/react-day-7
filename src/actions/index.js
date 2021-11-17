import * as type from '../types';

export const register = (data) => {
    return {
        type: type.REGISTER_USER,
        payload: data
    }
} 

export const login = (data) => {
    return {
        type: type.LOGIN_USER,
        payload: data
    }
} 