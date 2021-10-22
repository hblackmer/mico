import React, { Component } from 'react';
import {
    Button,
    Container, Row, Col,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import './Contribute.css';

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

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

    render() {
        return (
            <Container className="Contribute px-lg-5">
                <h2 className="text-white text-center" id="contribute">Contribute</h2>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}