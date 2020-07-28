import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalProject from './Components/ModalProject'
import Students from './Components/Students';
import Projects from './Components/Projects'
import {
  BrowserRouter as Router,
  
  Link,
  Route,
  Switch
} from 'react-router-dom'

function App () {
    return (
      <>
        <Students />
        <ModalProject />
       {/* <Router>
            <Switch>
                <Route path='/projects' exact component={Projects}/> 
                <Route path="/:id" component={Projects} />
            </Switch>
        </Router>  */}

        
    
      </>
    )
 
}

export default App;
