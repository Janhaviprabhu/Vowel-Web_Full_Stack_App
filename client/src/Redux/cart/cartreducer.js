import {
    DELETE_CART_ERROR,
    DELETE_CART_LOADING,
    DELETE_CART_SUCCESS,
    GET_CART_ERROR,
    GET_CART_LOADING,
    GET_CART_SUCCESS,
    POST_CART_ERROR,
    POST_CART_LOADING,
    POST_CART_SUCCESS,
    UPDATE_CART_ERROR,
    UPDATE_CART_LOADING,
    UPDATE_CART_SUCCESS,
} from "./actionTypes";

const initialState = {
    data: [],
    loading: false,
    error: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CART_LOADING:
            return { ...state, loading: true, error: false, data: [] };
        case GET_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                data: [],
            };
        case GET_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        case POST_CART_LOADING:
            return { ...state, loading: true, error: false, data: [] };
        case POST_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                data: [],
            };
        case POST_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        case DELETE_CART_LOADING:
            return { ...state, loading: true, error: false, data: [] };
        case DELETE_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                data: [],
            };
        case DELETE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        case UPDATE_CART_LOADING:
            return { ...state, loading: true, error: false, data: [] };
        case UPDATE_CART_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                data: [],
            };
        case UPDATE_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                data: payload,
            };
        default:
            return {
                ...state,
            };
    }
};