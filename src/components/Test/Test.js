import React, { Fragment, useState, useEffect } from 'react';
import {
    Progress,
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form'
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import { FadeTransform } from 'react-animation-components';
import QuestionAnswer from '../QuestionAnswer/QuestionAnswer';
import { addQuestion, addAnswer } from '../../redux/ActionCreators';
import './Test.css';

const mapStateToProps = state => {
    return {
        htmlcss: state.htmlcss,
        javascript: state.javascript,
        programming: state.programming,
        react: state.react,
        questions: state.questions
    };
};

const mapDispatchToProps = {
    addQuestion: (id, question, answer, micoAnswer, source, category) => 
        addQuestion(id, question, answer, micoAnswer, source, category),
    addAnswer: (id, answer) => addAnswer(id, answer),
    resetFeedbackForm: () => (actions.reset('feedbackForm'))
};

function Test ({timer, test, categories, length, 
                htmlcss, javascript, programming, react, questions,
                addQuestion, addAnswer, resetFeedbackForm }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [timerActive, setTimerActive] = useState(false);
    const [time, setTime] = useState(false);
    const [questionNum, setQuestionNum] = useState(0);
    const [questionMax, setQuestionMax] = useState(8);

    useEffect(() => {
        generateQuestions(length);
    }, []);

    const onTimerTimeUpdate = ({time}) => {
        setTime (time);
    }

    const testSubmitted = () => {
        resetFeedbackForm();
        timer(time);
        test(questions);
    }

    const questionPrev = () => {
        if (questionNum > 0) {
            setQuestionNum(prevQuestionNum => prevQuestionNum - 1);
            setTimerActive(!timerActive);
        }
    }

    const hideComponent = () => {
        setShowAnswer(!showAnswer);
        setTimerActive(true);
    }

    const questionNext = () => {
        if (questionNum < questionMax) {
            setQuestionNum(prevQuestionNum => prevQuestionNum + 1);
        }
        if (questionNum === questionMax-1) {
            setTimerActive(!timerActive);
        }
    }

    const generateQuestions = () => {
        let key=0;
        let questionList=[];

        setQuestionMax(length === "long" ? 12 : length === "medium" ? 8 : length === "short" ? 4 : 8);

        for (let category of categories) {
            switch (category) {
                case "HTML/CSS":
                    questionList.push(...htmlcss);
                    break;
                case "JavaScript":
                    questionList.push(...javascript);
                    break;
                case "React":
                    questionList.push(...react);
                    break;
                case "Programming":
                    questionList.push(...programming);
                    break;
                default:
                    alert("No categories selected! Please start test again.");
            }
        }

        for (let q=0; q < (length === "long" ? 12 : length === "medium" ? 8 : length === "short" ? 4 : 8); q++) {
            let randomQuestionIdx = Math.floor(Math.random()*questionList.length);
            let randomQuestion = Object.assign({}, questionList[randomQuestionIdx]);
            key++;
            addQuestion(
                key, 
                randomQuestion.question,
                randomQuestion.answer,
                randomQuestion.micoAnswer,
                randomQuestion.source,
                randomQuestion.category
            );
            questionList.splice(randomQuestionIdx,1);
        };
    };

    const allQuestions = () => {
        let lastQuestion = questionNum === questionMax;
        let currentQuestion = questions[questionNum];

        return (
            <Fragment>
                 {questionNum === 11 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 10 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 9 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {!lastQuestion && questionNum === 8 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 7 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 6 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 5 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {!lastQuestion && questionNum === 4 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 3 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 2 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 1 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
                {questionNum === 0 && 
                    <QuestionAnswer 
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={questionPrev} 
                        next={questionNext} 
                        addAnswer={addAnswer} 
                        resetFeedbackForm={resetFeedbackForm}
                    />}
            </Fragment>
        );
    }

    return (
        <div className="test">
            <Container>
                <div className="dark-overlay"></div>
                <FadeTransform
                in
                duration = {300}
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(50%)'
                }}>
                    <Row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col className="test-timer">
                                    <Timer 
                                        active={timerActive} 
                                        duration={null} 
                                        className="h4"
                                        onTimeUpdate={onTimerTimeUpdate}
                                    >
                                            <i className="fas fa-stopwatch" />
                                            <span>  </span>
                                            <Timecode />
                                    </Timer>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 10, offset: 1 }}>
                                    <Progress animated className="progress" color="success" value={(questionNum / questionMax) * 100}>{questionNum}/{questionMax}</Progress>
                                </Col>
                            </Row>
                            { showAnswer ? 
                                <Fragment>
                                    {allQuestions()}
                                </Fragment> : 
                                <Button 
                                    color="primary" 
                                    type="button"
                                    onClick={() => 
                                        hideComponent()
                                }>START</Button>
                            }
                            { questionNum === questionMax ?
                                <Fragment>
                                    <Col xs={12} className="justify-content-center d-flex mt-5">
                                        <Button 
                                            type="button"
                                            outline
                                            id="answer-back"
                                            onClick={questionPrev}
                                        >Go Back</Button>
                                    </Col>
                                    <Col xs={12} className="justify-content-center d-flex">
                                        <Link to="/mico/results">
                                            <Button 
                                                type="button"
                                                color="primary"
                                                id="answer-submit"
                                                onClick={testSubmitted}
                                            >Submit Test</Button>
                                        </Link>
                                    </Col>
                                </Fragment>  : ''
                            }
                        </Col>
                    </Row>
                </FadeTransform>
            </Container>
        </div>
    );
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));