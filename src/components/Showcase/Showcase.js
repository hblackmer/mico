import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Customize from '../Customize/Customize';
import './Showcase.css';

class Showcase extends Component {
    render() {
        return (
            <div className="Showcase">
                <div id="overlay"></div>
                <div id="header">
                    <h1 id="header-name">MICO</h1>
                    <subtitle id="subtitle" className="d-none d-md-block">a studying tool for web developers</subtitle>
                    <Link to="/start">
                        <Button className="test-button" onClick={this.props.toggleModal}>Get Started</Button>
                    </Link>
                </div>
                <Customize isModalOpen={this.props.isModalOpen} toggleModal={this.props.toggleModal}/>
            </div>
        );
    }
}
  
export default Showcase;  