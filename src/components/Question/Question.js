import React, { Fragment } from 'react';
import './Question.css';

export default function Question({lastQuestion, question}) {
    return (
        <Fragment>
            {!lastQuestion ?
                <p className="question text-white">{question}</p> : ''
            }
        </Fragment>
    );
}