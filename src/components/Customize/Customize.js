import React, { Component } from 'react';
import {
    Container, Row, Col,
    Modal, ModalHeader, ModalBody,
    Button,
    Form, FormGroup, Input, Label
} from 'reactstrap';
import './Customize.css';

let currentTab = 0;

class Customize extends Component {

    showTab(n) {
        let x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
            document.getElementById("nextBtn").style.visibility = "hidden";
        } else {
            document.getElementById("nextBtn").innerHTML = '<i class="fa fa-angle-double-right"></i>';
            document.getElementById("nextBtn").style.visibility = "visible";
        }
    }
    
    nextPrev(n) {
        let x = document.getElementsByClassName("tab");
        if (n == 1 && !this.validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
            document.getElementById("nextprevious").style.display = "none";
            document.getElementById("all-steps").style.display = "none";
        }
        this.showTab(currentTab);
    }
    
    validateForm() {
        let x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid;
    }

    render() {
        return (
            <div class="modal-dialog modal-lg" role="document">
                <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggleModal}>
                    <ModalHeader toggle={this.props.toggleModal}>
                        <h3 className="modal-title">Test Customization</h3>
                        <Button type="button" className="close h3 bg-transparent" data-dismiss="modal">&times;</Button>
                    </ModalHeader>
                    <ModalBody>
                        <div class="container-fluid">
                            <Form id="regForm">
                                <div class="all-steps" id="all-steps">
                                    <span class="step"><i class="fas fa-exclamation-triangle"></i></span>
                                    <span class="step"><i class="far fa-envelope" /></span>
                                    <span class="step"><i class="fas fa-edit" /></span>
                                    <span class="step"><i class="far fa-clock" /></span>
                                </div>
                                <div class="tab text-center">
                                    <h3 class="text-danger font-mont">DISCLAIMER</h3>
                                    <h5 class="text-white my-3">Test customization is in development.<br />
                                        The following customization options are for demo purposes.</h5>
                                </div>
                                <div class="tab">
                                    <Label class="control-label text-white"></Label>
                                    <div class="controls">
                                        <div class="form-check form-switch toggle basic-toggle-button">
                                            <Input class="form-check-input" type="checkbox" id="emailOption" checked />
                                            <Label class="form-check-label text-white mb-3 h5" for="emailYes">Email me a
                                                copy of my test results</Label>
                                        </div>
                                    </div>
                                    <p id="hidden_content" class="mb-5"> 
                                        <Input placeholder="Email..." oninput="this.className = ''"name="fname" />
                                    </p>
                                </div>
                                <div class="tab">
                                    <h4 class="text-white text-center font-mont my-3">CATEGORIES</h4>
                                    <div class="row offset-1 justify-content-center mb-5">
                                        <div class="form-check form-switch col"> 
                                            <Input class="form-check-input" type="checkbox" id="flexSwitchCheckHTML" checked />
                                            <Label class="form-check-label text-white h5"
                                                for="flexSwitchCheckChecked">HTML</Label>
                                        </div>
                                        <div class="form-check form-switch col">
                                            <Input class="form-check-input" type="checkbox" id="flexSwitchCheckCSS" checked />
                                            <Label class="form-check-label text-white h5"
                                                for="flexSwitchCheckChecked">CSS</Label>
                                        </div>
                                        <div class="form-check form-switch col">
                                            <Input class="form-check-input" type="checkbox" id="flexSwitchCheckJavaScript"
                                                checked />
                                            <Label class="form-check-label text-white h5"
                                                for="flexSwitchCheckChecked">JavaScript</Label>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab">
                                    <h4 class="text-white text-center font-mont my-3">LENGTH</h4>
                                    <div class="toggle_radio mb-5">
                                        <Input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" />
                                        <Input type="radio" checked class="toggle_option" id="second_toggle" name="toggle_option" />
                                        <Input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" />
                                        <Label for="first_toggle">
                                            <p class="h5">Short</p>
                                        </Label>
                                        <Label for="second_toggle">
                                            <p class="h5">Medium</p>
                                        </Label>
                                        <Label for="third_toggle">
                                            <p class="h5">Long</p>
                                        </Label>
                                        <div class="toggle_option_slider">
                                        </div>
                                    </div>
                                </div>
                                <div class="tab text-center">
                                    <h3 class="text-danger font-mont">DISCLAIMER</h3>
                                    <h5 class="text-white my-3">Website is in development. <br />
                                        The next pages are for demo purposes.</h5>
                                    <a href="mico.html" class="btn btn-danger text-white" role="button">Demo</a>
                                </div>
                                <div style={{overflow: "auto"}} id="nextprevious">
                                    <div style={{float: "right"}}>
                                        <Button type="button" id="prevBtn" onclick="nextPrev(-1)">
                                            <i class="fa fa-angle-double-left" />
                                        </Button>
                                        <Button type="button" id="nextBtn" onclick="nextPrev(1)">
                                            <i class="fa fa-angle-double-right" />
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        )
    };
}

export default Customize;
