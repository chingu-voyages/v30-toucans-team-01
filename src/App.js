import React, {useState, useEffect} from 'react';
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
import { useLiveQuery } from "dexie-react-hooks";

function App() {
  const [sessions, setSessions] = useState([]); 

  function addToSessions(props) {
    // console.log(props)
    setSessions(session => [...sessions, props])
  }

  useEffect(() => {
    console.log(sessions[0])
    {sessions.length > 1 && db.sessions.add({
      snapshots: sessions[sessions.length-1].snapshots})}
  }, [sessions]) 

 

  useEffect(() => {
    console.log(db.sessions.get('1'))
  },[])


  return (
    <Router>
      <Switch>
        <Route path="/booth" >
          <Booth />
        </Route>
        <Route path="/fiverandomemojis">
          <FiveRandomEmojis addSession={addToSessions}/>
        </Route>
        <Route path="/">
          <Home sessions={sessions}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
