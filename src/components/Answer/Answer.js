import React, { Component, Fragment } from 'react';
import {
    Button,
    Container, Row, Col,
    Form, FormGroup, Input, Label,
} from 'reactstrap';
import '../Test/Test.css';

class Answer extends Component {
    render() {
        return (
            <Fragment>
                <Form id="answer-textarea">
                    <Row className="form-group mt-3">
                        <Col className="answer-text">
                            <Label for="feedback" className="col-form-label fs-3">Your Answer:</Label>
                                <textarea className="form-control" id="answer" name="answer" rows="6"></textarea>
                        </Col>
                    </Row>
                    <Row className="form-group mt-3">
                        <Col>
                            <Button href="/" color="primary" className="answer-submit">Submit</Button>
                            <Button type="submit" className="answer-arrow bg-transparent text-success">
                                <i className="far fa-caret-square-right" />
                            </Button>
                            <Button type="submit" className="answer-arrow bg-transparent text-success">
                                <i className="far fa-caret-square-left" />
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Fragment>
        );
    }
}
  
export default Answer;  