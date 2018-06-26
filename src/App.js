import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Footer from './components/Common/Footer';
import BudgetPage from './components/BudgetPage';
import FrontPage from './components/FrontPage';

let Butt = () => (
  <div> bro what </div>
)

let NotFound = () => (
  <span> 404 page not found </span>
)

let excel = (props) => (
  <span> cool: {props.match.params.string2} </span>
)

let App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Switch> 
        <Redirect exact from='/' to='/home'/>
        <Route exact path='/home' component={FrontPage} />
        <Route path='/budget/:account' component={BudgetPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);

export default App;
