import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';
import About from '../About/About';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Navigation />
                <Showcase />
                <About />
            </div>
        );
    }
}
  
export default Main;  