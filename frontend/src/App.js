import React, {Fragment} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
// import ServiceAddClassBased from './components/ServiceAddClassBased';
// import ServiceListClassBased from './components/ServiceListClassBased';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ServiceList}/>
        <Route path="/:id" component={ServiceAdd}/>
      </Switch>
    </Router>
  );
}

export default App;
