import React, { useState } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Showcase from '../Showcase/Showcase';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Test from '../Test/Test';
import Contribute from '../Contribute/Contribute';
import Results from '../Results/Results';

function Main () {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState(0);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const timer = (time) => {
        setTime(time);
    }

    return (
        <div className="Main">
            <Navigation 
                isNavOpen={isNavOpen}
                isModalOpen={isModalOpen}
                toggleNav={toggleNav}
                toggleModal={toggleModal}
            />
                <Switch>
                    <Route exact path='/mico/'
                        render={() =>
                            <Showcase 
                                toggleNav={toggleNav}
                                toggleModal={toggleModal}
                            />
                        } />
                    <Route exact path='/mico/about' component={About} />
                    <Route exact path='/mico/test'
                        render={() =>
                            <Test 
                                timer={timer}
                            />
                        } />
                    <Route exact path='/mico/contribute' component={Contribute} />
                    <Route exact path='/mico/results' 
                        render={() => 
                            <Results
                                time={time}
                            />
                        } />
                    <Redirect to='/mico/' />
                    <Showcase />
                </Switch>
            <Footer />
        </div>
    );
}
  
export default withRouter(Main);  