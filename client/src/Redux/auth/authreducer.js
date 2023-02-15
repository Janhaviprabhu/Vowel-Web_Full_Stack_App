import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS, } from "./actionTypes"


const initState = {
    logLoading: false,
    logError: false,
    regLoading: false,
    regError: false,
    isAuth: false,
    isRegister: "",
    user: null,
    loggedUser: null,
};

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING: {
            return {
                ...state,
                regLoading: false,
                regError: false,
                isRegister: false,
            };
        }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                regLoading: false,
                regError: false,
                isRegister: payload
            };
        }
        case REGISTER_ERROR: {
            return {
                ...state,
                regLoading: false,
                regError: true,
                isRegister: false,
            };
        }
        case LOGIN_LOADING: {
            return {
                ...state,
                logLoading: true,
                logError: false,
                isAuth: false,
            };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                logLoading: false,
                logError: false,
                isAuth: true,
                loggedUser: payload,
            };
        }
        case LOGIN_ERROR: {
            return {
                ...state,
                logLoading: false,
                logError: true,
                isAuth: false,
            };
        }
        default: {
            return state;
        }
    }
};