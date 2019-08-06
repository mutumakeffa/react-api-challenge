import { FETCH_TASK } from './types';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

const BASE_URL = 'https://kazi.azurewebsites.net';

// Load Task
const url = `${BASE_URL}/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC`;

export const fetchTasks = () => dispatch =>{
           
    try {
        const res = axios.get(url, setAuthToken(localStorage.accessToken));
                
        res.then(res => console.log(res))
        .then(data => dispatch({
            type: FETCH_TASK,
            payload:data
        }));

    } catch (err) {
        if(err) {
            console.log(err);
        }        
    }   
    

};


// DISPATCH THIS ACTION TO THE TASK REDUCER