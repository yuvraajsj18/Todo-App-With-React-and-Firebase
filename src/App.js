import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
