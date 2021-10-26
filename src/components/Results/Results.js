import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import './Results.css';


class Results extends Component {
    render() {
        return (
            <Container id="results">
                <h2 className="text-white text-center" id="results-header">Results</h2>
                <Row>
                    <Col className="text-green h3 mt-3 text-right">
                        <i className="fas fa-stopwatch" /> 00:12:41
                    </Col>
                    <Col>
                        <Button className="print-button mb-3 text-center text-white mx-5">Print
                            <span className="print-icon"></span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Results;