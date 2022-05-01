import React,  { useState } from 'react';
import './App.css';
import LandingPage from '../../client/src/components/LandingPage.jsx';
import Card from './components/Card.jsx';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Countries from './components/Card';
import Home from '../../client/src/components/Home.jsx';

import CreateForm from '../../client/src/components/CreateFrom.jsx';



function App() {

  return (
    <div className="App">
      
    
    <Route exact path='/home' component={Home}/>
    <Route exact path='/' component={LandingPage}/>
    <Route exact path='/create' component={CreateForm}/>
    
  

    </div>
  );
}

export default App;
