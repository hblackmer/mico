import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Showcase.css';

class Showcase extends Component {
    render() {
        return (
            <div className="Showcase">
                <section className="showcase d-flex justify-content-center align-items-center">
                    <div id="overlay"></div>
                    <div id="header" class="container text-white text-center">
                        <h1 className="mb-0 text-primary" id="header-name">MICO</h1>
                        <p className="d-none d-md-block"><span id="subtitle">test your knowledge</span></p>
                        <Button className="bg-primary text-white" id="testButton" href="#" role="button" variant="outline-primary">Get Started</Button>
                    </div>
                </section>
            </div>
        );
    }
}
  
export default Showcase;  