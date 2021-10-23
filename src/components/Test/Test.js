import React, { Component } from 'react';
import {
    Progress,
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import Question from '../Question/Question';
import Answer from '../Answer/Answer';
import './Test.css';

const mapStateToProps = state => {
    return {
        javascript: state.javascript,
        react: state.react,
        programming: state.programming
    };
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
        if (this.state.questionNum === this.state.questionMax) {

        }
    }

    questionPrev() {
        if (this.state.questionNum > 0) {
            this.setState(prevState => {
                return {questionNum: prevState.questionNum - 1}
            });
        }
    }

    questionNext() {
        if (this.state.questionNum < this.state.questionMax) {
            this.setState(prevState => {
                return {questionNum: prevState.questionNum + 1}
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
                <div>
                    <Question question={question} />
                </div>
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
                                <React.Fragment>
                                    <Row>
                                        <Col className="test-category">
                                            <i className="fab fa-js-square" /> Programming
                                        </Col>
                                    </Row>
                                    {this.AskQuestion()}
                                    <Answer questionNum={this.state.questionNum} questionMax={this.state.questionMax} submit={this.questionSubmitted} prev={this.questionPrev} next={this.questionNext}/>
                                </React.Fragment> : 
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
  
export default withRouter(connect(mapStateToProps)(Test));