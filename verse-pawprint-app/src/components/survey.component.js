import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class Survey extends Component {
    
    constructor(props) {
        super(props);
        // props in here - variables in react
        // updating state automatically updates the page with the new state
        
        //this binding - this always refers to itself
        this.onSelectOption = this.onSelectOption.bind(this);
        
        this.state = {
            questions:[],
            question: '',
            answerOptions: [],
            selectedOption: ''
        }
    }

    //executes before anything renders on screen
    componentDidMount() {
        axios.get('http://localhost:5000/questions')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        questions: response.data.map(question => question.question)
                    })
                }
            })
        
        


    }

    onSelectOption(e) {
        this.setState({
            selectedOption: e.target.value
        })

        
    }
    
    onSubmit(e) {
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