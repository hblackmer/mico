import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import Timecode from 'react-timecode';
import './Results.css';

class Results extends Component {
    createQuestion = ({ id, question, answer, micoAnswer, source}, idx) => {
        return (
            <Col xs={12}>
                <h4 className="text-primary">Question #{idx+1}</h4>
                <p className="text-white">
                    {question}
                </p>
                <p className="text-white">
                    <strong>Your Answer: </strong>
                    <br />
                    {answer}
                </p>
                <hr size="10" width="100%" color="grey" />
            </Col>
        );
    }

    render() {
        return (
            <Container>
                <h2 className="text-white text-center" id="results-header">Results</h2>
                <Row>
                    <Col className="text-green h3 mt-3 text-right">
                        <i className="fas fa-stopwatch" /> <Timecode time={this.props.time} />
                    </Col>
                    <Col>
                        <Button className="print-button mb-3 text-center text-white mx-5">Print
                            <span className="print-icon"></span>
                        </Button>
                    </Col>
                </Row>
                <Row id="results" className="justify-content-center">
                    {this.props.test.map(this.createQuestion)}
                </Row>
            </Container>
        );
    }
}
  
export default Results;