import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';
import About from '../About/About';

class Main extends Component {
    render() {
        return (
            <div className="Main">
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Showcase} />
                    <Route exact path='/about' component={About} />
                    <Redirect to='/' />
                    <Showcase />
                </Switch>
            </div>
        );
    }
}
  
export default Main;  