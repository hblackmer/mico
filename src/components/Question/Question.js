import React, { Component, Fragment } from 'react';
import './Question.css';

class Question extends Component {
    render() {
        return (
            <Fragment className="question">
                <p className="text-white">{this.props.question}</p>
            </Fragment>
        );
    }
}
  
export default Question;  