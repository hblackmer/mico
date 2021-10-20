import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    state = {
        tasks: [
            {name:"HTML",category:"list1", bgcolor: "#96D1CD"},
            {name:"CSS", category:"list1", bgcolor: "#96D1CD"},
            {name:"JavaScript", category:"list1", bgcolor: "#96D1CD"},
            {name:"React", category:"list1", bgcolor: "#96D1CD"}
        ]
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
        console.log('dragstart:',id);
        ev.dataTransfer.setData("id", id);
    }

    render() {
        var tasks = {
            list1: [],
            list2: []
        }

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
        );
    }
}

export default Categories;