import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Test from '../Test/Test';
import Contribute from '../Contribute/Contribute';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render() {
        return (
            <div className="Main">
                <Navigation isNavOpen={this.state.isNavOpen} isModalOpen={this.state.isModalOpen} toggleNav={this.toggleNav} toggleModal={this.toggleModal}/>
                <Switch>
                    <Route exact path='/mico/' render={() => <Showcase toggleNav={this.toggleNav} toggleModal={this.toggleModal}/>} />
                    <Route exact path='/mico/about' component={About} />
                    <Route exact path='/mico/test' component={Test} />
                    <Route exact path='/mico/contribute' component={Contribute} />
                    <Redirect to='/mico/' />
                    <Showcase />
                </Switch>
                <Footer />
            </div>
        );
    }
}
  
export default Main;  