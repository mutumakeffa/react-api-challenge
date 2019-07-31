import { FETCH_TASK, FETCH_LOGIN } from '../actions/types';

const initialState = {
    task: []
}

export default function(state = initialState, action ) {
    switch(action.type){
        case FETCH_TASK:
            return{
                ...state,
                task: action.payload
            };
        default:
            return state;
    }
}