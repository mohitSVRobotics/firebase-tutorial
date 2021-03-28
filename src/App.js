import './App.css';
import {useState, useEffect} from 'react';
import './components/ViewMemos';
import './components/createMemo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import ViewMemos from './components/ViewMemos';
import CreateMemo from './components/createMemo';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Memo</Link>
            </li>
            <li>
              <Link to="/view">View Memos</Link>
            </li>
          </ul>

        </nav>
        <Switch>
          <Route path="/view">
            <ViewMemos></ViewMemos>
          </Route>
          <Route path="/">
            <CreateMemo></CreateMemo>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
