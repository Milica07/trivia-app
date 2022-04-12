import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import {Trivia} from './components/Trivia';
import Chuck from "./components/Chuck";

function App() {
  const [trivia, setTrivia] = useState(true);
  return (
    <div className="App">
      <Router>
        <nav className="navbar-brand">
          <ul>
            <li>
              <Link to='/'>Trivia</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route to='/'>
            <Trivia/>
          </Route>
        </Switch>
      <button onClick={() => setTrivia(true)}>Trivia</button>
      <button onClick={() => setTrivia(false)}>Chuck</button>
      {trivia ? <p><Trivia/></p> : <p><Chuck/></p>}
      </Router>
    </div>
  );
}

export default App;
