import React from 'react'
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
<<<<<<< Updated upstream
=======
  const [sessions, setSessions] = useState([]); 
  const [quota, setQuota] = useState(0);
  const [usage, setUsage] = useState(0);

  function addToSessions(props) {
    // console.log(props)
    setSessions(session => [...sessions, props])
    db.sessions.add(props)
    const temp = showEstimatedQuota();
    console.log(temp)
  }

  useEffect(() => {
    console.log(sessions)
  }, [sessions]) 

  async function showEstimatedQuota() {
    if (navigator.storage && navigator.storage.estimate) {
      const estimation = await navigator.storage.estimate();
      console.log(`Quota: ${estimation.quota}`);
      console.log(`Usage: ${estimation.usage}`);
      return estimation.quota, estimation.usage
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
