import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { Accordion } from 'react-bootstrap'
import Timecode from 'react-timecode';
import './Results.css';

class Results extends Component {
    createQuestion = ({ id, question, answer, micoAnswer, source}) => {
        return (
            <Accordion.Item eventKey={id}>
                <Accordion.Header>{question}</Accordion.Header>
                <Accordion.Body className="text-white">
                    {answer}
                </Accordion.Body>
            </Accordion.Item>
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
                <Row>
                    <Accordion>
                        {this.props.test.map(this.createQuestion)}
                    </Accordion>
                </Row>
            </Container>
        );
    }
}
  
export default Results;