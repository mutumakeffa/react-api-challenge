import { FETCH_TASK } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
    data: [ ]
}

export default function(state = initialState, action ) {
    // setAuthToken(localStorage.accessToken);
    switch(action.type){
        case FETCH_TASK:
            return{
                ...state,
                data: action.payload.tasks
            };
        default:
            return state;
    }
}