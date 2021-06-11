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

function App() {
  const [sessions, setSessions] = useState([]); 

  function addToSessions(props) {
    // console.log(props)
    setSessions(session => [...sessions, props])
<<<<<<< Updated upstream
=======
    db.sessions.add(props)
    showEstimatedQuota();
>>>>>>> Stashed changes
  }

  useEffect(() => {
    console.log(sessions)
  }, [sessions]) 

<<<<<<< Updated upstream
=======
  async function showEstimatedQuota() {
    if (navigator.storage && navigator.storage.estimate) {
      const estimation = await navigator.storage.estimate();
      console.log(`Quota: ${estimation.quota}`);
      console.log(`Usage: ${estimation.usage}`);
    } else {
      console.error("StorageManager not found");
    }
  }

  useEffect(async () => {
    let temp = await db.sessions.toArray();
    setSessions(temp)
  },[])


>>>>>>> Stashed changes
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
