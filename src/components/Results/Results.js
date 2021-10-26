import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import Timecode from 'react-timecode';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import './Results.css';

class Results extends Component {
    handleClick = () => {
        alert("Sorry, not yet available!");
    }
    handleNewClick = () => {
        alert("Sorry, not yet available! Please refresh to reset!");
    }

    createQuestion = ({ id, question, answer, micoAnswer, source, category}, idx) => {
        return (
            <Fade in key={idx}>
                <Col xs={12}>
                    <h4 className="text-primary">Question #{idx+1} (
                        {(category === "css") ?
                            <span className="h5">
                                <i className="fab fa-css3-alt" /> CSS
                            </span> : 
                        (category === "html") ?
                            <span className="h5">
                                <i className="fa-html5" /> HTML
                            </span> :
                        (category === "javascript") ?
                            <span className="h5">
                                <i className="fab fa-js-square" /> JavaScript
                            </span> :
                        (category === "programming") ?
                            <span className="h5">
                                <i className="fab fa-js-square" /> Programming
                            </span> : 
                        (category === "react") ?
                            <span className="h5">
                                <i className="fab fa-react" /> React
                            </span> : '' })
                    </h4>
                    <p className="text-success">
                        {question}
                    </p>
                    <p className="text-white">
                        <strong>Your Answer: </strong>
                        <br />
                        {answer}
                    </p>
                    {source && <Button 
                        className="resources-button"
                        color="success"
                        href={source}
                        target="_blank"
                     >Resources</Button>}
                    <hr size="10" width="100%" color="grey" />
                </Col>
            </Fade>
        );
    }

    render() {
        return (
            <Container>
                <h2 className="text-white text-center" id="results-header">Results</h2>
                <FadeTransform
                in
                duration={200}
                timingFn='ease-in-out'
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Row>
                        <Col className="text-green h3 mt-3 text-right">
                            <i className="fas fa-stopwatch" /> <Timecode time={this.props.time} />
                        </Col>
                        <Col>
                            <Button className="print-button mb-3 text-center text-white mx-5" onClick={this.handleClick}>Print
                                <span className="print-icon"></span>
                            </Button>
                        </Col>
                    </Row>
                </FadeTransform>
                <Row id="results" className="justify-content-center">
                    <Stagger in duration={600} timingFn='ease-in-out'>
                        {this.props.test.map(this.createQuestion)}
                    </Stagger>
                    <Col xs={12} className="justify-content-center d-flex">
                        <Button
                            className="results-button"
                            color="primary"
                            onClick={this.handleNewClick}
                        >Retake Test</Button>
                        <Button 
                            className="results-button"
                            color="primary"
                            onClick={this.handleNewClick}
                        >New Test</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}
  
export default Results;