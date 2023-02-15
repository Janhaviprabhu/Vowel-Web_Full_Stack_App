import axios from "axios";
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
const token = localStorage.getItem("token");


export const getCartData = () => async (dispatch) => {
    dispatch({ type: GET_CART_LOADING });
    try {
        const res = await axios.get(`http://localhost:8080/cart/get`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    } catch (er) {
        return dispatch({ type: GET_CART_ERROR });
    }
};

export const addCartData = (data) => async (dispatch) => {
    dispatch({ type: POST_CART_LOADING });
    try {
        const res = await axios.post(`https://vowel-web.onrender.com/cart/addtocart`, data, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: POST_CART_SUCCESS, payload: res.data });
        dispatch(getCartData());
        return res.data;
    } catch (er) {
        return dispatch({ type: POST_CART_ERROR });
    }
};

export const deleteCartData = (id) => async (dispatch) => {
    dispatch({ type: DELETE_CART_LOADING });
    try {
        const res = await axios.delete(`https://vowel-web.onrender.com/cart/delete/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        dispatch({ type: DELETE_CART_SUCCESS, payload: res });
        dispatch(getCartData());
        return res;
    } catch (er) {
        return dispatch({ type: DELETE_CART_ERROR });
    }
};

export const updateCartData = (id, data) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_LOADING });
    console.log(id);
    try {
        const res = await axios.patch(
            `https://vowel-web.onrender.com/cart/update/${id}`,
            { qty: data },
            // {
            //     headers: { Authorization: `Bearer ${token}` },
            // }
        );
        dispatch({ type: UPDATE_CART_SUCCESS, payload: res });
        dispatch(getCartData());
        return res.data;
    } catch (er) {
        return dispatch({ type: UPDATE_CART_ERROR });
    }
};