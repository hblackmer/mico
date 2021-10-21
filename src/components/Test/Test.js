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
          timerActive: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent() {
        this.setState({
            showAnswer: !this.state.showAnswer,
            timerActive: true
        });
    }

    render() {
        const { showAnswer } = this.state;
        const questionList = [];
        const questionMaxNumSelected = 2;
        const questionNumIndex = 0;

        const GenerateQuestions = () => {
            while (questionList.length < questionMaxNumSelected) {
                let randomQuestionIdx = Math.floor(Math.random()*this.props.javascript.length);
                let randomQuestion = this.props.javascript[randomQuestionIdx];
                if (questionList.indexOf(randomQuestion) === -1) {
                    questionList.push(this.props.javascript[randomQuestionIdx]);
                }
            }
        };    

        const AskQuestion = () => {
            let question = questionList.shift().question;
            return (
                <div>
                    <Question question={question} />
                </div>
            );
        };    

        return (
            <div className="test">
                <Container>
                    <div className="dark-overlay"></div>
                    <Row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Row>
                                <Col className="test-timer">
                                    <Timer active={this.state.timerActive} duration={null} className="h4">
                                        <i className="fas fa-stopwatch" />
                                        <span>  </span>
                                        <Timecode />
                                    </Timer>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 10, offset: 1 }}>
                                    <Progress animated className="progress" color="success" value="25">1/5</Progress>
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
                                    <Answer />
                                </React.Fragment> : 
                                <Button color="primary" onClick={() => this.hideComponent()}>START</Button>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default withRouter(connect(mapStateToProps)(Test));