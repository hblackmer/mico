import React, { Component } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    Button,
    Form, FormGroup, Input, Label,
    Row, Col
} from 'reactstrap';
import Categories from '../Categories/Categories';
import './Customize.css';


class Customize extends Component {
    render() {
        return (
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                <ModalHeader toggle={this.props.toggleModal}> 
                    Test Customization
                </ModalHeader>
                <ModalBody>
                    <Form id="regForm">
                        <div className="tab">
                            <Categories />
                            <h4 className="text-white text-center my-3">CATEGORIES</h4>
                            <Row className="row offset-1 justify-content-center mb-5">
                                <Col className="form-check form-switch"> 
                                    <Input className="form-check-input" type="checkbox" id="flexSwitchCheckHTML" checked />
                                    <Label className="form-check-label text-white h5"
                                        for="flexSwitchCheckChecked">HTML</Label>
                                </Col>
                                <Col className="form-check form-switch">
                                    <Input className="form-check-input" type="checkbox" id="flexSwitchCheckCSS" checked />
                                    <Label className="form-check-label text-white h5"
                                        for="flexSwitchCheckChecked">CSS</Label>
                                </Col>
                                <Col className="form-check form-switch">
                                    <Input className="form-check-input" type="checkbox" id="flexSwitchCheckJavaScript"
                                        checked />
                                    <Label className="form-check-label text-white h5"
                                        for="flexSwitchCheckChecked">JavaScript</Label>
                                </Col>
                            </Row>
                        </div>
                        <div className="tab">
                            <h4 className="text-white text-center my-3">LENGTH</h4>
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
                            <Button href="/" color="primary" id="customize-button">Start</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        );
    }
}

export default Customize;
