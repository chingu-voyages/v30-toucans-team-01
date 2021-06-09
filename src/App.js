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

function App() {
  const [sessions, setSessions] = useState([]); 

  async function addToSessions(props) {
    // console.log(props)
    setSessions(session => [...sessions, props])
    await db.sessions.add(props)
  }

  useEffect(() => {
    console.log(sessions[0])
    // return () => 

    // {sessions.length > 1 && db.sessions.add({snapshots: sessions[sessions.length-1].snapshots})}
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
