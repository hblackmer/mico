import React, { Component } from 'react';
import {
    Button,
    Label,
    Container, Row, Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './Contribute.css';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

export default class Contribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            email: '',
            agree: false,
            question: '',
            answer: '',
            source: '',
            touched: {
                name: false,
                email: false,
                question: false,
                answer: false,
                source: false
            }
        };
      
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Placeholder
    handleSubmit(values) {
        //console.log("Current state is: " + JSON.stringify(values));
        //alert("Current state is: " + JSON.stringify(values));
        alert("Sorry, functionality is not yet implemented!");
    }

    render() {
        return (
            <Container className="Contribute px-lg-5">
                <h2 className="text-white text-center" id="contribute">Contribute</h2>
                <p className="text-center" id="contribute-subtitle">Support Mico by contributing questions, thank you!</p>
                <p className="text-danger text-center">[Sorry, feature not yet supported. Please <a href="https://www.linkedin.com/in/hblackmer/" target="_blank" className="text-danger font-weight-bold">contact me via LinkedIn</a> in the meantime!]</p>
                <Row className="form-box">
                    <Col md={10}>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group text-white">
                                <Col md={{size: 1, offset:1}} className="text-icons">
                                    <Label htmlFor="name">
                                        <i className="fas fa-user" />
                                    </Label>
                                </Col>
                                <Col md={{size: 4}} className="text-box mb-2">
                                    <Control.text
                                        model=".name"
                                        id="name"
                                        name="name"
                                        placeholder="Name (optional)"
                                        className="form-control"
                                    />
                                </Col>
                                <Col md={{size: 1}} className="text-icons">
                                    <Label htmlFor="email">
                                        <i className="fas fa-envelope" />
                                    </Label>
                                </Col>
                                <Col md={{size: 5}}>
                                    <Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email (optional)"
                                        className="form-control"
                                        validators={{
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group text-white">
                                <Col md={{size: 1, offset:1}} className="text-icons">
                                    <Label htmlFor="question">
                                        <i class="fas fa-question-circle" />
                                    </Label>
                                </Col>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".question"
                                        id="question"
                                        name="question"
                                        placeholder="Question (required)"
                                        rows="3"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(1),
                                            maxLength: maxLength(100)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".question"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 1 character',
                                            maxLength: 'Must be 100 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group text-white">
                                <Col md={{size: 1, offset:1}} className="text-icons">
                                    <Label htmlFor="answer">
                                        <i class="fas fa-check-circle" />
                                    </Label>
                                </Col>
                                <Col md={10}>
                                    <Control.textarea
                                        model=".answer"
                                        id="answer"
                                        name="answer"
                                        placeholder="Answer (optional)"
                                        rows="3"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group text-white">
                                <Col md={{size: 1, offset:1}} className="text-icons">
                                    <Label htmlFor="source">
                                        <i class="fas fa-link" />
                                    </Label>
                                </Col>
                                <Col md={10}>
                                    <Control.textarea 
                                        model=".source"
                                        id="source"
                                        name="source"
                                        placeholder="Reference (optional)"
                                        rows="1"
                                        className="form-control"
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button
                                        type="submit"
                                        color="primary">
                                        Send Question
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </Col>
                </Row>
            </Container>
        );
    }
}