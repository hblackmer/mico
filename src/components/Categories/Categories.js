import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component {
    state = {
        tasks: [
            {name:"HTML",category:"todo", bgcolor: "#96D1CD"},
            {name:"CSS", category:"todo", bgcolor: "#96D1CD"},
            {name:"JavaScript", category:"todo", bgcolor: "#96D1CD"},
            {name:"React", category:"todo", bgcolor: "#96D1CD"}
        ]
    }

    onDragOver = (ev) => {
        ev.preventDefault();
    }

    onDrop = (ev, cat) => {
       let id = ev.dataTransfer.getData("id");
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
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
            todo: [],
            done: []
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
                <h2 className="header">Categories</h2>
                <div className="todo"
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "todo")}}>
                    <span className="task-header">Not Selected</span>
                    {tasks.todo}
                </div>
                <div className="droppable" 
                    onDrop={(e)=>this.onDrop(e, "done")}
                    onDragOver={(ev)=>this.onDragOver(ev)}>
                    <span className="task-header">Selected</span>
                    {tasks.done}
                </div>
            </div>
        );
    }
}

export default Categories;