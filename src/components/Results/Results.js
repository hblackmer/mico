import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { Accordion } from 'react-bootstrap'
import Timecode from 'react-timecode';
import './Results.css';

class Results extends Component {
    createQuestion = ({ id, question, answer, micoAnswer, source}, idx) => {
        return (
            <Col md={6} lg={4}>
                <Accordion.Item eventKey={idx}>
                    <Accordion.Header>Question #{idx+1}</Accordion.Header>
                    <Accordion.Body className="text-white">
                        <strong>Question: </strong>{question}
                        <br/>
                        <strong>Answer: </strong> {answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Col>
        );
    }

    render() {
        return (
            <Container id="results">
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
                <Accordion>
                    <Row className="justify-content-center">
                        {this.props.test.map(this.createQuestion)}
                    </Row>
                </Accordion>
            </Container>
        );
    }
}
  
export default Results;