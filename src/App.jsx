import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import facade from './facade';
import Header from './components/Header';
import Home from './components/Home.jsx';

import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Profile from './components/Profile';
import NoMatch from './components/NoMatch';
import CreateEvent from './components/CreateEvent';
import ViewEvents from './components/ViewEvents';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('works... for now');
  
  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('logged out...');
  }

  return (
    <Container>
      <Router>
        <Header facade={facade} loggedIn={loggedIn}/>
        <Switch>
          <Route exact path="/">
            <Home
          logout={logout}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
          facade={facade}
          setErrorMessage={setErrorMessage}
          />
          </Route>
          <Route path="/profile">
            {facade.hasUserAccess('user', loggedIn) &&
            <Profile facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route path="/viewEvents">
            {facade.hasUserAccess('user', loggedIn) &&
            <ViewEvents facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route path="/createEvent">
            {facade.hasUserAccess('admin', loggedIn) &&
            <CreateEvent facade={facade} setErrorMessage={setErrorMessage}/>}
          </Route>
          <Route>
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
