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
                            <Button type="button" color="primary" className="answer-submit" onClick={this.props.submit}>Submit</Button>
                            <Button type="button" className="answer-arrow bg-transparent text-success" onClick={this.props.next}>
                                <i className="far fa-caret-square-right" />
                            </Button>
                            <Button type="button" className="answer-arrow bg-transparent text-success" onClick={this.props.prev}>
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