import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/routes/PrivateRoute';
import UnauthorizedRoute from './components/routes/UnauthorizedRoute'
 
function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Nav />
            <Switch>
              <PrivateRoute path="/" exact>
                <Home />
              </PrivateRoute>
              <UnauthorizedRoute path="/signup">
                <Signup />
              </UnauthorizedRoute>
              <UnauthorizedRoute path="/signin">
                <Signin />
              </UnauthorizedRoute>
            </Switch>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
