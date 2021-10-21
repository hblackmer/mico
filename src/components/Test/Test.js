import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import Answer from '../Answer/Answer';
import './Test.css';

class Test extends Component {
    render() {
        return (
            <React.Fragment className="Test">
                <div className="dark-overlay"></div>
                <Container className="d-flex justify-content-center align-items-center">
                    <Row>
                        <Col sm={{ size: 10, offset: 1 }}>
                            <Row className="category">
                                <h1 className="mb-0 text-green text-center"><i className="fab fa-css3-alt" /> CSS </h1>
                            </Row>
                            <Row>
                                <Col className="progress text-center mb-3">
                                    <div className="progress-value">Question 3 of 5</div>
                                </Col>
                            </Row>
                            <div className="question">
                                <h4 className="row text-white">What are CSS selectors?</h4>
                            </div>
                            <Answer />
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
  
export default Test;  