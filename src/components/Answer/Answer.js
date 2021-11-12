import React, { useState } from 'react';
import {
    Button,
    Row, Col,
    Label,
    UncontrolledTooltip
} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import './Answer.css';

export default function Answer ({id, answer, prev, next, submit, lastQuestion, addAnswer, source}) {
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
                    </Col>:''
                };
            </Row>
            <Row className="form-group mt-3">
                {!lastQuestion &&
                    <Col xs={12} className={source ? "d-flex justify-content-between" : "d-flex justify-content-end"}>
                        { source ? <div>
                            <Button 
                                type="button" 
                                className="answer-arrow bg-transparent text-success"
                                id="helpToolTip"
                                href={source}
                                target="_blank"
                                ><i className="far fa-question-circle" />
                            </Button>
                            <UncontrolledTooltip placement="right" target="helpToolTip">
                                Need help answering this question? <br/> Click here for a hint!
                            </UncontrolledTooltip>
                        </div> : ''}
                        <div>
                            <Button
                                type="button"
                                className="answer-arrow bg-transparent text-success"
                                onClick={next}
                                ><i className="far fa-caret-square-right" />
                            </Button>
                            <Button 
                                type="button" 
                                className="answer-arrow bg-transparent text-success"
                                onClick={prev}
                                ><i className="far fa-caret-square-left" />
                            </Button>
                        </div>
                    </Col>
                }
            </Row>
        </Form>
    );
} 