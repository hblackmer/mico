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
    };
};

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showAnswer: false,
          timerActive: false,
          questionNum: 0,
          questionMax: 3
        };
        this.questionSubmitted = this.questionSubmitted.bind(this);
        this.questionPrev = this.questionPrev.bind(this);
        this.questionNext = this.questionNext.bind(this);
        this.hideComponent = this.hideComponent.bind(this);
    }

    questionSubmitted() {
        this.setState(prevState => {
            return {questionNum: prevState.questionNum + 1}
        });
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
    }

    render() {
        const { showAnswer, timerActive, questionMax, questionNum } = this.state;
        const questionList = [];
        const calculateProgress = (questionNum / questionMax) * 100;


        const GenerateQuestions = () => {
            while (questionList.length < questionMax) {
                let randomQuestionIdx = Math.floor(Math.random()*this.props.javascript.length);
                let randomQuestion = this.props.javascript[randomQuestionIdx];
                if (questionList.indexOf(randomQuestion) === -1) {
                    questionList.push(this.props.javascript[randomQuestionIdx]);
                }
            }
        };    

        const AskQuestion = () => {
            if (questionNum !== questionMax) {
                let question = questionList[questionNum].question;
                return (
                    <div>
                        <Question question={question} />
                    </div>
                );
            }
            return <div></div>
        };

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
                                    <Progress animated className="progress" color="success" value={calculateProgress}>{questionNum}/{questionMax}</Progress>
                                </Col>
                            </Row>
                            { showAnswer ? 
                                <React.Fragment>
                                    <Row>
                                        <Col className="test-category">
                                            <i className="fab fa-js-square" /> JavaScript
                                        </Col>
                                    </Row>
                                    {GenerateQuestions()}
                                    {AskQuestion()}
                                    <Answer submit={this.questionSubmitted} prev={this.questionPrev} next={this.questionNext}/>
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