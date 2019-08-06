import { FETCH_TASK } from './types';
import axios from 'axios';
const BASE_URL = 'https://kazi.azurewebsites.net';

export const fetchTasks = () => dispatch => {

    const url = `${BASE_URL}/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC`;

    axios.get(url)
    .then(data => dispatch({
        type: FETCH_TASK,
        payload: data
    }));
}






//DISPATCH THIS ACTION TO THE REDUCER