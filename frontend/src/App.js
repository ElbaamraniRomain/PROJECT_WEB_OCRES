import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './widgets/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path = '/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
    }

export default App;
