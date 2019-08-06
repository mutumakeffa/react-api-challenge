import React from 'react';
import Tasks from './components/Tasks';
import Login from './components/Login';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
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
