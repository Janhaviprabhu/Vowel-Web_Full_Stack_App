import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_FAILURE, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, UPDATE_PRODUCT_FAILURE, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "./actionTypes";
import axios from "axios"
export const getAllProducts = (query) => async (dispatch) => {

    try {
        dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
        const res = await axios.get(`http://localhost:8080/products/get`)
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({
            type: GET_ALL_PRODUCTS_FAILURE,
        });
    }
};

export const updateProduct = (id, data) => async (dispatch) => {

    try {
        dispatch({ type: UPDATE_PRODUCT_REQUEST });

        await fetch(`http://localhost:8080/products/update/${id}`, {
            body: JSON.stringify(data),
            method: "PUT",
            headers: {
                token: localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });


        dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAILURE,
        });
    }
};

export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        await fetch(`http://localhost:8080/products/delete/${id}`, {
            method: "DELETE",
            headers: {
                token: localStorage.getItem("token"),
                "Content-Type": "application/json",
            },
        });
        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: id });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAILURE,
        });
    }
};