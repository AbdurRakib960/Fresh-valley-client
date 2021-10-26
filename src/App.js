import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import LogUp from './components/LogUp/LogUp';
import { AuthProvider } from './components/Context/AuthContext';
import CheckOut from './components/CheckOut/CheckOut';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/admin" component={Admin} />
          <PrivateRoute path="/checkOut" comp={CheckOut} />
          <Route path="/login" component={LogIn} />
          <Route path="/logup" component={LogUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
