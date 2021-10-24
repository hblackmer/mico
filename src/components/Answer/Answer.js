import React, { Component, Fragment } from 'react';
import {
    Button,
    Row, Col,
    Label,
} from 'reactstrap';
import { Control, Form } from 'react-redux-form';
import './Answer.css';

class Answer extends Component {
    render() {
        return (
            <Form model="feedbackForm" onSubmit={values => this.props.submit(values)} id="answer-textarea">
                <Row className="form-group mt-3">
                    {this.props.lastQuestion ?
                    <Col className="answer-text">
                        <Label htmlFor="answer">Your Answer:</Label>
                        <Control.textarea
                            model=".answer"
                            id="answer"
                            name="answer"
                            rows="6"
                            className="form-control"
                        />
                    </Col>:''};
                </Row>
                <Row className="form-group mt-3">
                    {!this.props.lastQuestion ?
                    <Fragment>
                        <Col xs={12} className="justify-content-center d-flex">
                            <Button type="button" outline id="answer-back" onClick={this.props.prev}>Go Back</Button>
                        </Col>
                        <Col xs={12} className="justify-content-center d-flex">
                            <Button type="button" color="primary" className="answer-submit" onClick={this.props.submit}>Submit Test</Button>
                        </Col>
                    </Fragment> :
                    <Col xs={12} className="justify-content-center d-flex">
                        <Button type="button" className="answer-arrow bg-transparent text-success" onClick={this.props.prev}>
                            <i className="far fa-caret-square-left" />
                        </Button>
                        <Button type="button" className="answer-arrow bg-transparent text-success" onClick={this.props.next}>
                            <i className="far fa-caret-square-right" />
                        </Button>
                    </Col>}
                </Row>
            </Form>
        );
    }
}
  
export default Answer;  