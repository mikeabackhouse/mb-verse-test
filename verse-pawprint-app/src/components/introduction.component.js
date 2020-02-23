import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Introduction extends Component {
    
    
    render() {
        return (

<div className="introduction">
    <div>
        Introductory Text
    </div>
    <br/>
    <Link to="/survey" className="nav-link">Take Survey</Link>
    

</div>


        );
    }
}