import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './views/home';
import "./App.css";
import Booth from './views/booth';
import FiveRandomEmojis from './views/fiveRandomEmojis';
import db from './services/faceitdb'

function App() {
  const [sessions, setSessions] = useState([]); 
  const [isActive, setIsActive] = useState(false);
  
  function addToSessions(props) {
    console.log(props)
    setSessions(session => [...sessions, props])
    db.sessions.add(props)
  }

  useEffect(() => {
    console.log(sessions)
  }, [sessions]) 

  useEffect(async () => {
    let temp = await db.sessions.toArray();
    setSessions(temp)
  },[])


  return (
    <Router>
      <Switch>
        <Route path="/booth" >
          <Booth />
        </Route>
        <Route path="/fiverandomemojis">
          <FiveRandomEmojis />
        </Route>
        <Route path="/">
          <Home sessions={sessions} activeModal={{isActive, setIsActive}}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
