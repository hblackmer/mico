import React, { Component } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    Button,
    Form, Input, Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Customize.css';

class Customize extends Component {    
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                {name:"HTML",category:"list1", bgcolor: "#96D1CD"},
                {name:"CSS", category:"list1", bgcolor: "#96D1CD"},
                {name:"JavaScript", category:"list1", bgcolor: "#96D1CD"},
                {name:"React", category:"list1", bgcolor: "#96D1CD"},
                {name:"Programming", category:"list1", bgcolor: "#96D1CD"}
            ],
            categories: []
        }
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       let tasks = this.state.tasks.filter((task) => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       this.setState({
           ...this.state,
           tasks
       });
    }

    onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    handleClick = () => {
        this.props.toggleModal();
        let selectedCategories = this.state.tasks.filter(state => 
            state.category === "list2"
        ).map(state => state.name);
        //this.props.categories = selectedCategories;
    }

    render() {
        let tasks = {
            list1: [],
            list2: []
        }
        const { isModalOpen, toggleModal } = this.props;

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name} 
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    className="draggable"
                    style = {{backgroundColor: t.bgcolor}}
                    >
                    {t.name}
                </div>
            );
        });

        return (
            <Modal isOpen={isModalOpen} toggleModal={toggleModal}>
                <ModalHeader toggle={toggleModal}> 
                    Test Customization
                </ModalHeader>
                <ModalBody>
                    <Form id="regForm">
                        <div className="customize-section">
                            <h4 className="categories-header">CATEGORIES</h4>
                            <p className="categories-subtitle">Drag and drop item(s) to be tested on:</p>
                            <div className="container-drag">
                                <div className="list1"
                                    onDragOver={(e)=>this.onDragOver(e)}
                                    onDrop={(e)=>{this.onDrop(e, "list1")}}>
                                    <span className="task-header">Not Selected</span>
                                    {tasks.list1}
                                </div>
                                <div className="list2" 
                                    onDrop={(e)=>this.onDrop(e, "list2")}
                                    onDragOver={(ev)=>this.onDragOver(ev)}>
                                    <span className="task-header">Selected</span>
                                    {tasks.list2}
                                </div>
                            </div>
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
                                    defaultChecked
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
                                    onClick={this.handleClick}
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
