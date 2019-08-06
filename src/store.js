import thunk from 'redux-thunk';
import allReducers from './reducers';
import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension'




//STORE --> GLOBALIZED STATE
const initialState = {};

const middleWare = [thunk];

const store = createStore(
    allReducers, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare)) 
);


export default store;

