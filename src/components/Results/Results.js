import React, { Fragment, useRef } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import Timecode from 'react-timecode';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import './Results.css';
import ReactToPrint from 'react-to-print';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        test: state.questions
    };
};

const PrintQuestions = React.forwardRef(({test}, ref) => {
    return (
        <div ref={ref}>
            {test.map(({question, answer, category}, idx) =>
                <Col xs={12}>
                    <h4 className="text-black">Question #{idx+1} (
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
                    <p className="text-text-black">
                        {question}
                    </p>
                    <p className="text-text-black">
                        <strong>Your Answer: </strong>
                        <br />
                        {answer}
                    </p>
                    <hr size="10" width="100%" color="grey" />
                </Col>
            )}
        </div>
    );
});

const CreateQuestion = ({test}) => {
    return (
        <Fragment>
            {test.map(({question, answer, source, category}, idx) =>
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
            )}
        </Fragment>
    );
};


function Results ({time, test}) {
    const componentRef = useRef();

    const handleNewClick = () => {
        alert("Sorry, not yet available! Please refresh to reset!");
    }

    return (
        <Container>
            <h2 className="text-white text-center" id="results-header">Results</h2>
            <FadeTransform
            in
            duration={200}
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Row>
                    <Col className="text-green h3 mt-3 text-right">
                        <i className="fas fa-stopwatch" /> <Timecode time={time} />
                    </Col>
                    <Col>
                        <ReactToPrint
                            trigger={() => 
                                <Button className="print-button mb-3 text-center text-white mx-5">Print
                                    <span className="print-icon"></span>
                                </Button>}
                            content={() => componentRef.current}
                        />
                    </Col>
                </Row>
            </FadeTransform>
            <Row id="results" className="justify-content-center">
                <Stagger in duration={600}>
                    <CreateQuestion ref={componentRef} test={test} />
                </Stagger>
                <div style={{ display: "none" }}>
                    <PrintQuestions ref={componentRef} test={test} />
                </div>
                <Col xs={12} className="justify-content-center d-flex">
                    <Button
                        className="results-button"
                        color="primary"
                        onClick={handleNewClick}
                    >Retake Test</Button>
                    <Button 
                        className="results-button"
                        color="primary"
                        onClick={handleNewClick}
                    >New Test</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default connect(mapStateToProps, null)(Results);