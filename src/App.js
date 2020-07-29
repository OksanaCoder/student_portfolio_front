import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalProject from './Components/ModalProject'
import Students from './Components/Students';
import Projects from './Components/Projects'
import Details from './Components/Details'
import {
  BrowserRouter as Router,
  
  Link,
  Route,
  Switch
} from 'react-router-dom'

function App () {
    return (
      <>
      <Router>
        <div style={{display: 'flex', justifyContent: 'center'}}>
              <Link to={'/'} className="nav-link" style={{color: '#fff'}}>Home</Link>  
              <Link to={'/projects'} className="nav-link" style={{ color: '#fff'}}>Projects</Link>  
        </div>
              <Route exact path='/'  exact component={Students} />
              <Route path='/projects' exact component={Projects} />
              <Route path='/details/:id' exact component={Details}/>
         
              </Router>
        
    
      </>
    )
 
}

export default App;
