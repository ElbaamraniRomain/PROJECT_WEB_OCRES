import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './widgets/Dashboard'
import SignIn from './SignIn'
import addDataApi from './addDataApi'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path = '/' component={Dashboard}/>
          <Route path = '/SignIn' component={SignIn}/>
          <Route path = '/AddDataApi' component={addDataApi}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
    }

export default App;
