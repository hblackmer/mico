import React, { Component } from 'react';
import {
    Button,
    Row, Col,
    Label,
} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import '../Test/Test.css';

class Answer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: ''
        }
    };

    render() {
        return (
            <LocalForm onSubmit={values => this.props.submit(values)} id="answer-textarea">
                <Row className="form-group mt-3">
                    <Col className="answer-text">
                        <Label htmlFor="answer">Your Answer:</Label>
                        <Control.textarea
                            model=".answer"
                            id="answer"
                            name="answer"
                            rows="8"
                            className="form-control"
                        />
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
            </LocalForm>
        );
    }
}
  
export default Answer;  