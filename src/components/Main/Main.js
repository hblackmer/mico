import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Test from '../Test/Test';
import Contribute from '../Contribute/Contribute';
import Results from '../Results/Results';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            time: 0,
            test: [],
            categories: []
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.timer = this.timer.bind(this);
        this.test = this.test.bind(this);
        this.categories = this.categories.bind(this);
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

    timer(time) {
        this.setState({
            time: time
        });
    }

    test(test) {
        this.setState({
            test: test
        });
    }

    categories(categories) {
        this.setState({
            categories: categories
        });
    }

    render() {
        return (
            <div className="Main">
                <Navigation 
                    isNavOpen={this.state.isNavOpen}
                    isModalOpen={this.state.isModalOpen}
                    toggleNav={this.toggleNav}
                    toggleModal={this.toggleModal}
                    categories={this.categories}
                />
                    <Switch>
                        <Route exact path='/mico/'
                            render={() =>
                                <Showcase 
                                    toggleNav={this.toggleNav}
                                    toggleModal={this.toggleModal}
                                    categories={this.categories}
                                />
                            } />
                        <Route exact path='/mico/about' component={About} />
                        <Route exact path='/mico/test'
                            render={() =>
                                <Test 
                                    timer={this.timer}
                                    test={this.test}
                                />
                            } />
                        <Route exact path='/mico/contribute' component={Contribute} />
                        <Route exact path='/mico/results' 
                            render={() => 
                                <Results
                                    time={this.state.time}
                                    test={this.state.test}
                                />
                            } />
                        <Redirect to='/mico/' />
                        <Showcase />
                    </Switch>
                <Footer />
            </div>
        );
    }
}
  
export default withRouter(Main);  