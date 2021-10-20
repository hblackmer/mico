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
                        <h3 className="modal-title">Test Customization Customize</h3>
                        <Button type="button" className="close h3 bg-transparent" data-dismiss="modal">&times;</Button>
                    </ModalHeader>
                </Modal>
            </div>
        )
    };
}

export default Customize;
