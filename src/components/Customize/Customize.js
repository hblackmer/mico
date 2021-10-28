import React, { useState } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    Button,
    Form, Input, Label,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { addCustomization } from '../../redux/ActionCreators';
import { connect } from 'react-redux';
import './Customize.css';

const mapDispatchToProps = {
    addCustomization: (categories, length) => addCustomization(categories, length)
};

function Customize ({ isModalOpen, toggleModal, addCustomization }) {
    const [tasks, setTasks] = useState([
        {name:"HTML/CSS",category:"list1", bgcolor: "#96D1CD"},
        {name:"JavaScript", category:"list1", bgcolor: "#96D1CD"},
        {name:"React", category:"list1", bgcolor: "#96D1CD"},
        {name:"Programming", category:"list1", bgcolor: "#96D1CD"}
    ]);
    const [testLength, setTestLength] = useState("medium");
    const lists = {
        list1: [],
        list2: []
    };

    const onDragOver = ev => {
        ev.preventDefault();
    }

    const onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       let tasksFiltered = tasks.filter(task => {
           if (task.name === id) {
               task.category = cat;
           }
           return task;
       });

       setTasks(
           tasksFiltered
       );
    }

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    }

    const handleClick = () => {
        let selectedCategories = tasks.filter(state => 
            state.category === "list2"
        ).map(state => state.name);
        if (selectedCategories.length === 0) {
            alert("No categories were selected. Defaulted to all categories.");
            selectedCategories = ["HTML/CSS", "JavaScript", "React", "Programming"];
        }
        addCustomization(selectedCategories, testLength);
        toggleModal();
    }

    const handleLengthChange = event => {
        setTestLength(event.target.value);
    }

    tasks.forEach (t => {
        lists[t.category].push(
            <div key={t.name} 
                onDragStart = {e => onDragStart(e, t.name)}
                draggable
                className="draggable"
                style = {{backgroundColor: t.bgcolor}}
            >
                {t.name}
            </div>
        );
    });

    return (
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
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
                                onDragOver={(e)=>onDragOver(e)}
                                onDrop={(e)=>{onDrop(e, "list1")}}>
                                <span className="task-header">Not Selected</span>
                                {lists.list1}
                            </div>
                            <div className="list2" 
                                onDrop={(e)=>onDrop(e, "list2")}
                                onDragOver={(ev)=>onDragOver(ev)}>
                                <span className="task-header">Selected</span>
                                {lists.list2}
                            </div>
                        </div>
                    </div>
                    <div className="customize-section">
                        <h4 className="length-header">LENGTH</h4>
                        <fieldset onChange={handleLengthChange}>
                            <div className="toggle-radio mb-5">
                                <Label htmlFor="first-toggle">
                                    <h5>Short</h5>
                                </Label>
                                <Input
                                    type="radio"
                                    className="toggle-option"
                                    id="first-toggle"
                                    name="toggle-option"
                                    value="short"
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
                                    value="medium"
                                />
                                <Label htmlFor="third-toggle">
                                    <h5>Long</h5>
                                </Label>
                                <Input
                                    type="radio"
                                    className="toggle-option"
                                    id="third-toggle"
                                    name="toggle-option"
                                    value="long"
                                />
                                <div className="toggle-option-slider">
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div className="tab text-center">
                        <Link to="/mico/test">
                            <Button 
                                color="primary"
                                id="customize-button"
                                onClick={handleClick}
                            >Start</Button>
                        </Link>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    );
}

export default connect(null, mapDispatchToProps)(Customize);