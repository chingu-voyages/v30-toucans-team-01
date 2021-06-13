import React, {useState, useEffect} from 'react'
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
  const [storage, setStorage] = useState({ quota: 0, usage: 0})

  async function showEstimatedQuota() {
    if (navigator.storage && navigator.storage.estimate) {
      const estimation = await navigator.storage.estimate();
      setStorage({quota: estimation.quota, usage: estimation.usage})
      console.log(`Quota: ${estimation.quota}`);
      console.log(`Usage: ${estimation.usage}`);
    } else {
      console.error("StorageManager not found");
    }
  }
  
  function addToSessions(props) {
    console.log(props)
    setSessions(session => [...sessions, props])
    db.sessions.add(props)
    showEstimatedQuota();
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
          <Home sessions={sessions} storageData={storage}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
