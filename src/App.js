import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/home';
import "./App.css";
import Booth from './views/booth';
import FiveRandomEmojis from './views/fiveRandomEmojis';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/booth">
          <Booth/>
        </Route>
        <Route path="/fiverandomemojis">
          <FiveRandomEmojis />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
