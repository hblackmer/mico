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
                        <Label for="feedback" className="row col-form-label fs-3 text-primary">Answer:</Label>
                        <div className="row">
                            <textarea className="form-control" id="answer" name="answer" rows="4"></textarea>
                        </div>
                    </Row>
                    <Row className="form-group mt-3">
                        <a href="results.html" className="btn btn-primary">Submit</a>
                        <Button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-right" /></Button>
                        <Button type="submit" className="btn btn-success bg-transparent arrow-size float-end text-success"><i className="far fa-caret-square-left" /></Button>
                    </Row>
                </Form>
            </Fragment>
        );
    }
}
  
export default Answer;  