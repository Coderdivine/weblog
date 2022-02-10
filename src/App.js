import logo from './logo.svg';
import './App.css';
import Blog from './Blog';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import {Axios} from "./Contact"
import BlogPage from './BlogPage';
//import { useState,useEffect} from 'react';
function App() {

  return (

    <div>
    <Router>
    <Switch>
    <Route   path="/content/:id" component={Blog}/>
    <Route  exact path="/" component={BlogPage}/>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
