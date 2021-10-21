import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import './Test.css';

class Test extends Component {
    render() {
        return (
            <div className="Test">
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
                            <div id="time" className="text-green text-center h3"><i className="fas fa-stopwatch" /> 00:00:00</div>
                            <Button variant="primary" type="submit" className="btn btn-primary" id="start_btn">START</Button>
                            <form id="answer-textarea">
                                <Row className="form-group mt-3">
                                    <label for="feedback" className="row col-form-label fs-3 text-primary">Answer:</label>
                                    <div className="row">
                                        <textarea className="form-control" id="answer" name="answer" rows="4"></textarea>
                                    </div>
                                </Row>
                                <Row className="form-group row mt-3">
                                    <div>
                                        <a href="results.html" className="btn btn-primary">Submit</a>
                                        <button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-right"></i></button>
                                        <button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-left"></i></button>
                                    </div>
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
  
export default Test;  