import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import TriviaApp from './pages/TriviaApp';

function App() {
  const [trivia, setTrivia] = useState(false);
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
            <TriviaApp/>
          </Route>
        </Switch>
      <button onClick={() => setTrivia(true)}>Trivia</button>
      <button onClick={() => setTrivia(false)}>Chuck</button>
      {trivia ? <p>Trivia</p> : <p>Chuck</p>}
      </Router>
    </div>
  );
}

export default App;
