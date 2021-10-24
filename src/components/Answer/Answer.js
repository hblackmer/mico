import React, { Component, Fragment, useState } from 'react';
import {
    Button,
    Row, Col,
    Label,
} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import './Answer.css';

function Answer ({id, answer, prev, next, submit, lastQuestion, addAnswer}) {
    const [value, setValue] = useState(answer);

    const handleInputChange = (event) => {
        addAnswer(id, event.target.value);
        setValue(event.target.value);
    }

    return (
        <Form model="feedbackForm" onSubmit={values => submit(values)} id="answer-textarea">
            <Row className="form-group mt-3">
                {!lastQuestion ?
                <Col className="answer-text">
                    <Label htmlFor="answer">Your Answer:</Label>
                    <Control.textarea
                        model=".answer"
                        id="answer"
                        name="answer"
                        rows="6"
                        className="form-control"
                        onChange={handleInputChange}
                        value={value}
                    />
                </Col>:''};
            </Row>
            <Row className="form-group mt-3">
                {lastQuestion ?
                <Fragment>
                    <Col xs={12} className="justify-content-center d-flex">
                        <Button type="button" outline id="answer-back" onClick={prev}>Go Back</Button>
                    </Col>
                    <Col xs={12} className="justify-content-center d-flex">
                        <Button type="button" color="primary" className="answer-submit" onClick={submit}>Submit Test</Button>
                    </Col>
                </Fragment> :
                <Col xs={12} className="justify-content-center d-flex">
                    <Button type="button" className="answer-arrow bg-transparent text-success" onClick={prev}>
                        <i className="far fa-caret-square-left" />
                    </Button>
                    <Button type="submit" className="answer-arrow bg-transparent text-success" onClick={next}>
                        <i className="far fa-caret-square-right" />
                    </Button>
                </Col>}
            </Row>
        </Form>
    );
}
  
export default Answer;  