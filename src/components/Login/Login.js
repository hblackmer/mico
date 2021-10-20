import React, { Component } from 'react';
import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody,
    Button,
    Form, Input, Label
} from 'reactstrap';

class Customize extends Component {
    render() {
        return (
            <div id="loginModal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                        <ModalHeader toggle={this.props.toggleModal}>
                            <h3 className="modal-title">Login</h3>
                            <Button type="button" className="close" data-dismiss="modal">&times;</Button>
                        </ModalHeader>
                        <ModalBody>
                            <Container className="container-fluid">
                                <Form>
                                    <Row className="form-row">
                                        <Col className="form-group col-12">
                                            <Label className="sr-only" htmlFor="loginEmail">Email address</Label>
                                            <Input type="email" className="form-control form-control-sm my-2" id="loginEmail"
                                                placeholder="Enter email" />
                                        </Col>
                                        <Col className="form-group col-12">
                                            <Label className="sr-only" htmlFor="loginPassword">Password</Label>
                                            <Input type="password" className="form-control form-control-sm my-2" id="loginPassword"
                                                placeholder="Password" />
                                        </Col>
                                        <Col className="col">
                                            <div className="form-check">
                                                <Input className="form-check-input" type="checkbox" />
                                                <Label className="form-check-label"> Remember me</Label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="form-row">
                                        <Button type="submit" className="btn btn-primary btn-sm ml-1 mt-4">Sign in</Button>
                                        <Button type="button" className="btn btn-secondary btn-sm ml-auto mt-4"
                                            data-dismiss="modal">Sign Up</Button>
                                    </Row>
                                </Form>
                            </Container>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    };
}

export default Customize;
