
import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile';
import Guitar from './Components/Guitar';
import Drum from './Components/Drum';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <h1>Practice Pal</h1>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route exact path="/profile">
        <Profile></Profile>
        </Route>
        <Route exact path="/guitar">
        <Guitar></Guitar>
        </Route>
        <Route exact path="/drum">
        <Drum></Drum>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
