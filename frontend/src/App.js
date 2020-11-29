import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import dashboard from './widgets/Dashboard'
import SignIn from './SignIn'
import addDataApi from './addDataApi'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path = '/' component={dashboard}/>
          <Route path = '/SignIn' component={SignIn}/>
          <Route path = '/AddDataApi' component={addDataApi}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
    }

export default App;
