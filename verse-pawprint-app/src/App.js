import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Introduction from "./components/introduction.component";
import Survey from "./components/survey.component";

import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Introduction} />
        <Route path="/survey" component={Survey} />
      </div>
    </Router>
  );
}

export default App;
