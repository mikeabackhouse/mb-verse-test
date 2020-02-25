import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

import introIcon from '../images/startScreen-Image.svg';

export default class Introduction extends Component {
    

    
    render() {
        return (

<div className="introduction">
    <div className="introImageContainer">
        <div className="introImage" >
            <img src={introIcon} />
        </div>
    </div>
    <div className="introHeader">
        <h1>
            Calculate your personal Pawprint
        </h1>
    </div>
    <br/>
    <div >
        <p className="introText">
        Next we have a short 2-3 minute survey covering Diet, Home, Travel and Other that will let us calculate your personal carbon footprint (or Pawprint as we like to call it).
        </p>
    </div>
    <br/>
    <Link to="/survey">
        <Button block size="lg" variant="primary">
            Take Survey
        </Button>
        
    </Link>
    

</div>


        );
    }
}