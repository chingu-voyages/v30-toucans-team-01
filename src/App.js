import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/home';
import "./App.css";
import Booth from './views/booth';
import Session from './components/sessions'

function App() {
  const [sessions, setSessions] = useState([]); 

  function addToSessions(props) {
    // console.log(props)
    setSessions(session => [...sessions, props])
  }

  useEffect(() => {
    console.log(sessions)
  }, [sessions]) 

  return (
    <Router>
      <Switch>
        <Route path="/booth" >
          <Booth addSession={addToSessions}/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
