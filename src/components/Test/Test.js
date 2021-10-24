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
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import { addAnswer } from '../../redux/ActionCreators';
import './Test.css';

const mapStateToProps = state => {
    return {
        css: state.css,
        html: state.html,
        javascript: state.javascript,
        programming: state.programming,
        react: state.react
    };
};

const mapDispatchToProps = {
    addAnswer: (answer) => (addAnswer(answer)),
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
          questionMax: 6
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
        this.GenerateQuestions();
    }

    GenerateQuestions = () => {
        while (questionList.length < this.state.questionMax) {
            let randomQuestionIdx = Math.floor(Math.random()*this.props.programming.length);
            let randomQuestion = this.props.programming[randomQuestionIdx];
            if (questionList.indexOf(randomQuestion) === -1) {
                questionList.push(this.props.programming[randomQuestionIdx]);
            }
        }
    };    

    AskQuestion = () => {
        if (this.state.questionNum !== this.state.questionMax) {
            let question = questionList[this.state.questionNum].question;
            return (
                <Fragment>
                    <h1 className="test-category">
                        <i className="fab fa-js-square" /> Programming
                    </h1>
                    <Question question={question} />
                </Fragment>
            );
        }
        return <div></div>
    };

    render() {
        const { showAnswer, timerActive, questionMax, questionNum } = this.state;

        return (
            <div className="test">
                <Container>
                    <div className="dark-overlay"></div>
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
                                    {this.AskQuestion()}
                                    <Answer questionNum={questionNum} questionMax={questionMax} submit={this.questionSubmitted} prev={this.questionPrev} next={this.questionNext} addAnswer={this.props.addAnswer} resetFeedbackForm={this.props.resetFeedbackForm}/>
                                </Fragment> : 
                                <Button color="primary" onClick={() => 
                                    this.hideComponent()
                                }>START</Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));