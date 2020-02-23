import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Survey extends Component {
    
    constructor(props) {
        super(props);
        // props in here - variables in react
        // updating state automatically updates the page with the new state
        
        //this binding - this always refers to itself
        this.onSelectOption = this.onSelectOption.bind(this);
        
        this.state = {
            question: '',
            answerOptions: [],
            selectedOption: ''
        }
    }

    //executes before anything renders on screen
    componentDidMount() {
        this.setState({
            question: 'My First Question',
            answerOptions: [
                'Option A',
                'Option B',
                'Option C',
                'Option D'
            ]
        })
    }

    onSelectOption(e) {
        this.setState({
            selectedOption: e.target.value
        })

        console.log('calculate stuff');
        window.location = '/results';
    }
    
    render() {
        return (
            <div>
                Question: {this.state.question}
                <br/>
                
                
            </div>
        );
    }
}