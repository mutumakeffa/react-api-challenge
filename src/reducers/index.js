//import all the reducers here and combine them then export the combined reducer to create store
//REDUCER --> DESCRIBES HOW AN ACTION WILL TRANSFORM A STATE TO THE NEXT STATE

import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import  auth from './auth';
import setAuthToken from '../utils/setAuthToken';


setAuthToken(localStorage.accessToken);

const allReducers = combineReducers({
    taskReducer,
    auth
});

export default allReducers;