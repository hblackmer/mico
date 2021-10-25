import React, { Component, Fragment } from 'react';
import {
    Progress,
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
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
        css: state.css,
        html: state.html,
        javascript: state.javascript,
        programming: state.programming,
        react: state.react,
        questions: state.questions
    };
};

const mapDispatchToProps = {
    addQuestion: (id, question, answer, micoAnswer, source) => addQuestion(id, question, answer, micoAnswer, source),
    addAnswer: (id, answer) => addAnswer(id, answer),
    resetFeedbackForm: () => (actions.reset('feedbackForm'))
};

const questionList = [];

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showAnswer: false,
          timerActive: false,
          questionNum: 0,
          questionMax: 7
        };
        this.questionSubmitted = this.questionSubmitted.bind(this);
        this.questionPrev = this.questionPrev.bind(this);
        this.questionNext = this.questionNext.bind(this);
        this.hideComponent = this.hideComponent.bind(this);
    }

    questionSubmitted() {
        this.props.resetFeedbackForm();
    }

    questionPrev() {
        if (this.state.questionNum > 0) {
            this.setState(prevState => {
                return {
                    questionNum: prevState.questionNum - 1,
                    timerActive: !this.state.timerActive
                }
            });
        }
    }

    questionNext() {
        if (this.state.questionNum < this.state.questionMax) {
            this.setState(prevState => {
                return {questionNum: prevState.questionNum + 1}
            });
        }
        if (this.state.questionNum === this.state.questionMax-1) {
            this.setState({
                timerActive: !this.state.timerActive
            });
        }
    }

    hideComponent() {
        this.setState({
            showAnswer: !this.state.showAnswer,
            timerActive: true
        });
        this.generateQuestions();
    }

    generateQuestions = () => {
        let key=0;
        while (questionList.length < this.state.questionMax) {
            let randomQuestionIdx = Math.floor(Math.random()*this.props.programming.length);
            let randomQuestion = this.props.programming[randomQuestionIdx];
            if (questionList.indexOf(randomQuestion) === -1) {
                key++;
                questionList.push(this.props.programming[randomQuestionIdx]);
                this.props.addQuestion(
                    key, 
                    randomQuestion.question,
                    randomQuestion.answer,
                    randomQuestion.micoAnswer,
                    randomQuestion.source
                )
            }
        }
    };

    allQuestions = (category) => {
        let lastQuestion = this.state.questionNum === this.state.questionMax;
        let question = !lastQuestion && questionList[this.state.questionNum].question;
        let id = !lastQuestion && questionList[this.state.questionNum].id;
        let answer = !lastQuestion && this.props.programming[this.props.programming.findIndex((obj => obj.id === id))].answer;

        if (this.state.questionMax === 7) {
            return (
                <Fragment>
                    {this.state.questionNum === 7 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 6 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 5 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 4 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 3 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 2 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 1 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                    {this.state.questionNum === 0 && 
                        <QuestionAnswer 
                            category={category}
                            lastQuestion={lastQuestion}
                            question={question}
                            answer={answer}
                            id={id}
                            submit={this.questionSubmitted} 
                            prev={this.questionPrev} 
                            next={this.questionNext} 
                            addAnswer={this.props.addAnswer} 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                        />}
                </Fragment>
            );
        }
    }

    render() {
        const { showAnswer, timerActive, questionMax, questionNum } = this.state;

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
                                        <Timer active={timerActive} duration={null} className="h4">
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
                                <p className="text-danger text-center">Test functionality is still in progress! The following is for demo purposes currently.</p>
                                { showAnswer ? 
                                    <Fragment>
                                        {this.allQuestions("programming")}
                                    </Fragment> : 
                                    <Button color="primary" onClick={() => 
                                        this.hideComponent()
                                    }>START</Button>
                                }
                            </Col>
                        </Row>
                    </FadeTransform>
                </Container>
            </div>
        );
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));