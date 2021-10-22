import React, { Component } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    Button, Tooltip,
    Form, FormGroup, Input, Label,
    Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './Customize.css';


class Customize extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isModalOpen} toggleModal={this.props.toggleModal}>
                <ModalHeader toggle={this.props.toggleModal}> 
                    <h3>Test Customization</h3>
                </ModalHeader>
                <ModalBody>
                    <Form id="regForm">
                        <div className="tab">
                            <h4 className="categories-header">CATEGORIES</h4>
                            <lead className="categories-subtitle">Drag and drop item(s) to be tested on:</lead>
                            <Categories />
                        </div>
                        <div className="tab">
                            <h4 className="length-header">LENGTH</h4>
                            <div className="toggle-radio mb-5">
                                <Input type="radio" className="toggle-option" id="first-toggle" name="toggle-option" />
                                <Input type="radio" checked className="toggle-option" id="second-toggle" name="toggle-option" />
                                <Input type="radio" className="toggle-option" id="third-toggle" name="toggle-option" />
                                <Label for="first-toggle">
                                    <h5>Short</h5>
                                </Label>
                                <Label for="second-toggle">
                                    <h5>Medium</h5>
                                </Label>
                                <Label for="third-toggle">
                                    <h5>Long</h5>
                                </Label>
                                <div className="toggle-option-slider">
                                </div>
                            </div>
                        </div>
                        <div className="tab text-center">
                            <Link to="/mico/test">
                                <Button color="primary" id="customize-button" onClick={this.props.toggleModal}>Start</Button>
                            </Link>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Customize;
