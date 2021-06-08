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
import Gallery from './views/gallery';


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
