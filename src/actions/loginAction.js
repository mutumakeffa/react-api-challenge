import { LOGIN_SUCCESS, LOGIN_ERROR, USER_LOADED, AUTH_ERROR } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';


//This action is a fxn that is going to fetch login credentials from the url

const BASE_URL = 'https://kazi.azurewebsites.net';


//Login user

export const LoginUser = (data) => dispatch => {   
    const url = `${BASE_URL}/personnel/login`;

    try {
        axios.post(url, data)
        .then(res => dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        }));
    } catch (error) {
        error = error.res.data.error

        if(error) {
            //REDIRECT BACK TO THE LOGIN PAGE OR ALERT MSG 
            console.log(error)
        }

        dispatch({
            type: LOGIN_ERROR
        })
    }

}


//Load user
export const loaduser = () => dispatch => {
    const url = `${BASE_URL}/personnel/login`;

    if(localStorage.accessToken){
        setAuthToken(localStorage.accessToken);
    }
    try {
        axios.get(url)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}





//DISPATCH --> SEND THE ACTIONS TO THE REDUCER
//WE ARE ABLE TO DISPATCH MORE THAN ONE ACTION