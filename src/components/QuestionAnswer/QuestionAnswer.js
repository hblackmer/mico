import React, { Fragment } from 'react';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';

function QuestionAnswer ({category, lastQuestion, question, questionSubmitted, prev, next, addAnswer, resetFeedbackForm}) {

    const categoryDisplay = (category, lastQuestion) => {
        return (
            <Fragment>
                {lastQuestion ? 
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
            {categoryDisplay(category, lastQuestion)}
            <Question
                lastQuestion={lastQuestion}
                question={question}
            />
            <Answer 
                lastQuestion={lastQuestion}
                submit={questionSubmitted} 
                prev={prev} 
                next={next} 
                addAnswer={addAnswer} 
                resetFeedbackForm={resetFeedbackForm}
            />
        </Fragment>
    )
}
  
export default QuestionAnswer;