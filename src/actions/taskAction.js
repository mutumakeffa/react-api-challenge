import { FETCH_TASK } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const BASE_URL = 'https://kazi.azurewebsites.net';

// Load Task
const url = `${BASE_URL}/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC`;

export const fetchTasks = () => dispatch =>{

    const token = localStorage.getItem('accessToken');
    try {
        // const res = axios.get(url, setAuthToken(localStorage.accessToken));
        const res = axios.get(url, { headers:{'Authorization': `Bearer ${token}`}});
                
        res.then(data => dispatch({
            type: FETCH_TASK,
            payload:data
        }));

    } catch (err) {
        if(err) {
            console.log(err);
        }        
    }   
    

};


// export const loaduser = () => dispatch => {
//     const url = `${BASE_URL}/personnel/login`;

//     if(localStorage.accessToken){
//         setAuthToken(localStorage.accessToken);
//     }
//     try {
//         axios.get(url)
//         .then(res => dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         }))
//     } catch (error) {
//         dispatch({
//             type: AUTH_ERROR
//         })
//     }
// }


// DISPATCH THIS ACTION TO THE TASK REDUCER