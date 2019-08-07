import { FETCH_TASK } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

const initialState = {
    data: [ ]
}

export default function(state = initialState, action ) {
    switch(action.type){
        case FETCH_TASK:
            setAuthToken(action.payload.accessToken);
            return{
                ...state,
                data: action.payload.tasks
            };
        default:
            return state;
    }
}
