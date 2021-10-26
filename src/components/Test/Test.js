import React, { Component, Fragment } from 'react';
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

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showAnswer: false,
          timerActive: false,
          time: 0,
          questionNum: 0,
          questionMax: 7
        };
        this.testSubmitted = this.testSubmitted.bind(this);
        this.questionPrev = this.questionPrev.bind(this);
        this.questionNext = this.questionNext.bind(this);
        this.hideComponent = this.hideComponent.bind(this);
        this.onTimerTimeUpdate = this.onTimerTimeUpdate.bind(this);
    }

    onTimerTimeUpdate({time}) {
        this.setState({
            time: time
        });
    }

    testSubmitted() {
        this.props.resetFeedbackForm();
        this.props.timer(this.state.time);
        this.props.test(this.props.questions);
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
            timerActive: true,
        });
    }

    componentDidMount() {
        this.generateQuestions(this.props.length);
    }

    generateQuestions = () => {
        let key=0;
        let questionList=[];

        this.setState({
            questionMax: this.props.length === "long" ? 12 :
                         this.props.length === "medium" ? 8 :
                         this.props.length === "short" ? 4 : 8
        });

        for (let category of this.props.categories) {
            switch (category) {
                case "HTML/CSS":
                    questionList.push(...this.props.htmlcss);
                    break;
                case "JavaScript":
                    questionList.push(...this.props.javascript);
                    break;
                case "React":
                    questionList.push(...this.props.react);
                    break;
                case "Programming":
                    questionList.push(...this.props.programming);
                    break;
                default:
                    alert("No categories selected! Please start test again.");
            }
        }

        for (let q=0; q <= (this.props.length === "long" ? 12 :
                            this.props.length === "medium" ? 8 :
                            this.props.length === "short" ? 4 : 8); q++) {
            let randomQuestionIdx = Math.floor(Math.random()*questionList.length);
            let randomQuestion = Object.assign({}, questionList[randomQuestionIdx]);
            key++;
            this.props.addQuestion(
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

    allQuestions = () => {
        let lastQuestion = this.state.questionNum === this.state.questionMax;
        let currentQuestion = this.props.questions[this.state.questionNum];

        return (
            <Fragment>
                 {this.state.questionNum === 11 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 10 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 9 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 8 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 7 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 6 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 5 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 4 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 3 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 2 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 1 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
                {this.state.questionNum === 0 && 
                    <QuestionAnswer 
                        category={currentQuestion.category}
                        lastQuestion={lastQuestion}
                        question={currentQuestion}
                        prev={this.questionPrev} 
                        next={this.questionNext} 
                        addAnswer={this.props.addAnswer} 
                        resetFeedbackForm={this.props.resetFeedbackForm}
                    />}
            </Fragment>
        );
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
                                        <Timer 
                                            active={timerActive} 
                                            duration={null} 
                                            className="h4"
                                            onTimeUpdate={this.onTimerTimeUpdate}
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
                                        {this.allQuestions()}
                                    </Fragment> : 
                                    <Button color="primary" onClick={() => 
                                        this.hideComponent()
                                    }>START</Button>
                                }
                                { questionNum === questionMax ?
                                    <Fragment>
                                        <Col xs={12} className="justify-content-center d-flex mt-5">
                                            <Button 
                                                type="button"
                                                outline
                                                id="answer-back"
                                                onClick={this.questionPrev}
                                            >Go Back</Button>
                                        </Col>
                                        <Col xs={12} className="justify-content-center d-flex">
                                            <Link to="/mico/results">
                                                <Button 
                                                    type="button"
                                                    color="primary"
                                                    id="answer-submit"
                                                    onClick={this.testSubmitted}
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
}
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Test));