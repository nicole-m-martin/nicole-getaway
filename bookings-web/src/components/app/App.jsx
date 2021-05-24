import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import Header from '../ui/Header';
import LoginPage from '../ui/LoginPage';
import HomePage from '../ui/HomePage';
import SignupPage from '../ui/SignUpPage';

export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <HomePage {...routerProps} />}
          />
        </Switch>
        <Route
          path="/login"
          exact
          render={(routerProps) => <LoginPage {...routerProps} />}
        />
        <Route
          path="/signup"
          exact
          render={(routerProps) => <SignupPage {...routerProps} />}
        />
        <Route
          path="/getaways"
          exact
          render={(routerProps) => <Getaways {...routerProps} />}
        />
      </Router>
    </div>
  );
}
