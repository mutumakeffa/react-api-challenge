//import all the reducers here and combine them then export the combined reducer to create store
//REDUCER --> DESCRIBES HOW AN ACTION WILL TRANSFORM A STATE TO THE NEXT STATE

import { combineReducers } from 'redux';
import LoginReducer from './loginReducer';
import TaskReducer from './taskReducer';
import  auth from './auth'

const allReducers = combineReducers({
    LoginReducer,
    TaskReducer,
    auth
});

export default allReducers;