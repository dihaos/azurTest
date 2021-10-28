import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Preview from './components/Preview';
import Form from './components/Form';
import logo from './static/img/logo.svg'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className='navbar'>
            <img id='logo' src={logo}/>
            <div className='links'>
              <Link id='link1' to="/">Форма</Link>

              <Link id='link2' to="/preview">Превью</Link>
            </div>
          </div>
          <Switch>
            <Route path="/preview">
              <Preview />
            </Route>
            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
