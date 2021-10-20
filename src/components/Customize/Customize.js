import React, { Component } from 'react';
import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody,
    Button,
    Form, FormGroup, Input, Label
} from 'reactstrap';

class Customize extends Component {
    render() {
        return (
            <div id="loginModal" className="modal fade">
                <div className="modal-dialog" role="document">
                    <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                        <ModalHeader toggle={this.props.toggleModal}>
                                <h3 className="modal-title">Customize</h3>
                                <Button type="button" className="close" data-dismiss="modal">&times;</Button>
                        </ModalHeader>
                        <ModalBody>
                            <Container className="container-fluid">
                            </Container>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    };
}

export default Customize;
