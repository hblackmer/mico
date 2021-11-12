import React, { Fragment } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

export default function QuestionAnswer ({lastQuestion, question, prev, next, addAnswer, resetFeedbackForm}) {

    const categoryDisplay = (category, lastQuestion) => {
        return (
            <Fragment>
                {!lastQuestion ? 
                    (category === "css") ?
                    <h1 className="test-category">
                        <i className="fab fa-css3-alt" /> CSS
                    </h1> : 
                    (category === "html") ?
                        <h1 className="test-category">
                            <i className="fa-html5" /> HTML
                        </h1> :
                    (category === "javascript") ?
                        <h1 className="test-category">
                            <i className="fab fa-js-square" /> JavaScript
                        </h1> :
                    (category === "programming") ?
                        <h1 className="test-category">
                            <i className="fab fa-js-square" /> Programming
                        </h1> :
                    (category === "react") ?
                        <h1 className="test-category">
                            <i className="fab fa-react" /> React
                        </h1> : '' : ''
                }
            </Fragment>
        )
    }

    return (
        <Fragment>
            {categoryDisplay(question.category, lastQuestion)}
            <Question
                lastQuestion={lastQuestion}
                question={question.question}
            />
            <Answer 
                lastQuestion={lastQuestion}
                source={question.source}
                prev={prev} 
                next={next} 
                addAnswer={addAnswer} 
                answer={question.answer}
                id={question.id}
                resetFeedbackForm={resetFeedbackForm}
            />
        </Fragment>
    )
}