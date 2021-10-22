import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
