import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/home';
import "./App.css";
import Booth from './views/booth';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/booth">
          <Booth/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
