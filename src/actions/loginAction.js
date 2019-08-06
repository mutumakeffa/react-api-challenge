import { FETCH_TASK, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOADED, AUTH_ERROR } from './types';
import axios from 'axios';


//This action is a fxn that is going to fetch login credentials from the url

const BASE_URL = 'https://kazi.azurewebsites.net';

//Load user
// export const LoadUser = () => async dispatch =>{
//     if(localStorage.accessToken){
//         setAuthToken(localStorage.accessToken);
//     }
//     try {
//         const res = await axios.get(BASE_URL)
//     } catch (err) {
        
//     }

// };

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





//DISPATCH --> SEND THE ACTIONS TO THE REDUCER
//WE ARE ABLE TO DISPATCH MORE THAN ONE ACTION








// export const LoginUser = (phone, password) => async dispatch => {
    // const config = {
    //     headers : {
    //         'Content-type' : 'application/json'
    //     }
    // }

//     const body = JSON.stringify({phone, password})  //prepare the data to send

//     try {
//         const url = `${BASE_URL}/personnel/login`;
//         const response = await axios.post(url, config, body);

//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload: response.data
//         });
//     } catch (err) {
        // const error = err.response.data.error

        // if(error) {
        //     //REDIRECT BACK TO THE LOGIN PAGE
        // }

        // dispatch({
        //     type: LOGIN_ERROR
        // })
        
//     }

// }