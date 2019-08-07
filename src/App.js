import React, { useEffect } from 'react';
import Tasks from './components/Tasks';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import { loaduser } from './actions/loginAction';

if(localStorage.accessToken){
  setAuthToken(localStorage.accessToken);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loaduser())
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Login}/> 
          <Route path="/tasks" component={Tasks}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
