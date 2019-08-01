import { FETCH_TASK, FETCH_LOGIN } from './types';

export const fetchTasks = () => dispatch => {
    fetch('https://cstonboarding.azurewebsites.net/tasks/assigned?page=1&limit=10&order=created&orderMethod=DESC')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_TASK,
            payload: data

        }));
}






//DISPATCH TO THIS ACTION TO THE REDUCER