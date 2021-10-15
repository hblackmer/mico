import React, { Component } from 'react';
import './Showcase.css';

class Showcase extends Component {
    render() {
        return (
            <div className="Showcase">
                <section className="showcase d-flex justify-content-center align-items-center">
                    <div id="overlay"></div>
                    <div id="header" class="container text-white text-center">
                        <h1 className="mb-0 text-primary" id="header-name">MICO</h1>
                        <p className="lead d-none d-md-block white font-mont mico-color-1">test your knowledge</p>
                        <a className="btn test-button custom-btn" id="testButton" href="#" role="button"><span>Get Started</span></a>
                    </div>
                </section>
            </div>
        );
    }
}
  
export default Showcase;  