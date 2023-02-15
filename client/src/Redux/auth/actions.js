import axios from 'axios';
import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from './actionTypes';

export const signUser = (creds) => async (dispatch) => {
    dispatch({ type: REGISTER_LOADING })

    try {
        let res = await axios.post(
            "https://vowel-web.onrender.com/user/signup",
            creds
        );
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });

        alert("Signup Success")
        return res.data;
    } catch (err) {
        dispatch({ type: REGISTER_ERROR })

        alert("Enter valid Details")
    }
}


export const logUser = (creds) => async (dispatch) => {
    dispatch({ type: LOGIN_LOADING })
    try {
        let res = await axios.post("https://vowel-web.onrender.com/user/login", creds);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        // console.log(res.data);
        alert("Login Success")
        return res.data;
    } catch (err) {
        dispatch({ type: LOGIN_ERROR })

        alert("Invalid Credential")
    }
};