import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import StreamPage from './pages/stream/stream';
import ProfilePage from './pages/profile/profile';
import SignupPage from './pages/login-signup/signup';
import LoginPage from './pages/login-signup/signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={StreamPage} />
        <Route path="/user/:username" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
    user: state.user,
    token: state.token

  }
}

export default connect(mapStateToProps)(App);
