import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import Timer from 'react-timer-wrapper';
import Timecode from 'react-timecode';
import Answer from '../Answer/Answer';
import './Test.css';

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

        return (
            <Container className="Test">
                <div className="dark-overlay"></div>
                <Row>
                    <Col sm={{ size: 10, offset: 1 }}>
                        <Row className="category">
                            <Col className="test-category">
                                <i className="fab fa-css3-alt" /> CSS
                            </Col>
                        </Row>
                        <Row>
                            <Col className="progress">
                                <div className="progress-value">Question 3 of 5</div>
                            </Col>
                        </Row>
                        <Timer active={this.state.timerActive} duration={null} className="text-green">
                            <i className="fas fa-stopwatch" />
                            <span>  </span>
                            <Timecode />
                        </Timer>
                        <div className="question">
                            <h4 className="row text-white">What are CSS selectors?</h4>
                        </div>
                        { showAnswer ? 
                        <Answer /> : 
                        <Button variant="primary" className="btn btn-primary" id="start_btn" onClick={() => this.hideComponent()}>START</Button>
                            }
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Test;  