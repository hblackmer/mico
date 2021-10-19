import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Showcase.css';

class Showcase extends Component {
    render() {
        return (
            <div className="Showcase">
                <div id="overlay"></div>
                <div id="header">
                    <h1 id="header-name">MICO</h1>
                    <subtitle id="subtitle" className="d-none d-md-block">test your knowledge</subtitle>
                    <Button id="test-button" href="#" role="button" variant="outline-primary">Get Started</Button>
                </div>
            </div>
        );
    }
}
  
export default Showcase;  