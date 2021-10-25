import React, { Component } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    Button,
    Form, Input, Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Categories from '../Categories/Categories';
import './Customize.css';


class Customize extends Component {    
    render() {
        const { isModalOpen, toggleModal } = this.props;

        return (
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                <ModalHeader toggle={toggleModal}> 
                    <h3>Test Customization</h3>
                </ModalHeader>
                <ModalBody>
                    <Form id="regForm">
                        <div className="customize-section">
                            <h4 className="categories-header">CATEGORIES</h4>
                            <lead className="categories-subtitle">Drag and drop item(s) to be tested on:</lead>
                            <Categories />
                        </div>
                        <div className="customize-section">
                            <h4 className="length-header">LENGTH</h4>
                            <div className="toggle-radio mb-5">
                                <Label htmlFor="first-toggle">
                                    <h5>Short</h5>
                                </Label>
                                <Input
                                    type="radio"
                                    className="toggle-option"
                                    id="first-toggle"
                                    name="toggle-option"
                                />
                                <Label htmlFor="second-toggle">
                                    <h5>Medium</h5>
                                </Label>
                                <Input
                                    type="radio"
                                    checked
                                    className="toggle-option"
                                    id="second-toggle"
                                    name="toggle-option"
                                />
                                <Label htmlFor="third-toggle">
                                    <h5>Long</h5>
                                </Label>
                                <Input
                                    type="radio"
                                    className="toggle-option"
                                    id="third-toggle"
                                    name="toggle-option"
                                />
                                <div className="toggle-option-slider">
                                </div>
                            </div>
                        </div>
                        <div className="tab text-center">
                            <Link to="/mico/test">
                                <Button 
                                    color="primary"
                                    id="customize-button"
                                    onClick={toggleModal}
                                >Start</Button>
                            </Link>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Customize;
