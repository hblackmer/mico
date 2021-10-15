import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Navigation />
                <Showcase />
            </div>
        );
    }
}
  
export default Main;  