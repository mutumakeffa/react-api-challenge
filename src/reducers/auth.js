import { LOGIN_SUCCESS, LOGIN_ERROR, USER_LOADED, AUTH_ERROR} from '../actions/types';
import setAuthToken from  '../utils/setAuthToken';


const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    isAuthenticated: null,
    loading: true,
    user: null
};


export default function(state=initialState, action) {
    switch(action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.payload.accessToken);
            setAuthToken(action.payload.accessToken);
            return{
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false
            }
        case LOGIN_ERROR:
        case AUTH_ERROR:
            localStorage.removeItem('accessToken');
            return{
                ...state,
                accessToken: null,
                isAuthenticated: false,
                loading: false 
            }
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        default:
            return state;

    }
}