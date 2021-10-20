import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Showcase.css';

class Showcase extends Component {
    render() {
        return (
            <div className="Showcase">
                <div id="overlay"></div>
                <div id="header">
                    <h1 id="header-name">MICO</h1>
                    <subtitle id="subtitle" className="d-none d-md-block">test your knowledge</subtitle>
                    <Link to="/start">
                        <Button className="test-button">Get Started</Button>
                    </Link>
                </div>
            </div>
        );
    }
}
  
export default Showcase;  