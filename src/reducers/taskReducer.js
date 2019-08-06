import { FETCH_TASK } from '../actions/types';

const initialState = {
    data: []
}

export default function(state = initialState, action ) {
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