import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import Header from './components/Header/Header.Component';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage.Component';
import SignInAndSignUpPage from './Pages/SignUpAndSignUpPage/SignUpAndSignUpPage.Component';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
  };
});
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div>
        <Switch>
          <Route exact path='/login' component={SignInAndSignUpPage} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
