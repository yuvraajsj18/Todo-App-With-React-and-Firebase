import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Todo from './components/Todo';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/routes/PrivateRoute';
 
function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <Nav />
            <Switch>
              <PrivateRoute path="/" exact>
                <Todo />
              </PrivateRoute>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
