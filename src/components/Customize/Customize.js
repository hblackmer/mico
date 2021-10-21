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
                            <div className="toggle_radio mb-5">
                                <Input type="radio" className="toggle_option" id="first_toggle" name="toggle_option" />
                                <Input type="radio" checked className="toggle_option" id="second_toggle" name="toggle_option" />
                                <Input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" />
                                <Label for="first_toggle">
                                    <h5>Short</h5>
                                </Label>
                                <Label for="second_toggle">
                                    <h5>Medium</h5>
                                </Label>
                                <Label for="third_toggle">
                                    <h5>Long</h5>
                                </Label>
                                <div className="toggle_option_slider">
                                </div>
                            </div>
                        </div>
                        <div className="tab text-center">
                            <Link to="/test">
                                <Button href="/" color="primary" id="customize-button" onClick={this.props.toggleModal}>Start</Button>
                            </Link>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Customize;
