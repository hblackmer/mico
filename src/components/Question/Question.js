import React, { Component, Fragment } from 'react';
import './Question.css';

class Question extends Component {
    render() {
        return (
            <Fragment>
                <p className="question text-white">{this.props.question}</p>
            </Fragment>
        );
    }
}
  
export default Question;  