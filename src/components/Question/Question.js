import React, { Fragment } from 'react';
import './Question.css';

export default function Question({question}) {
    return (
        <Fragment>
            <p className="question text-white">{question}</p>
        </Fragment>
    );
}