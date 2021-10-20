import React, { Component } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem,
    Button
} from 'reactstrap';
import { NavLink as NavTo} from 'react-router-dom';
import Customize from '../Customize/Customize';
import './Navigation.css';

const links = [
    { href: '/about', text: 'About' },
    { href: '/contribute', text: 'Contribute' }
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink className={className}><NavTo to={href}>{text}</NavTo></NavLink>
    </NavItem>
);

class Navigation extends Component {
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
            <div className="App">
                <Navbar dark expand="md">
                    <NavbarBrand className="text-primary ml-2" href="/"><strong>MICO</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Button outline onClick={this.toggleModal} id="start-button" className="text-primary ml-auto">Start</Button>
                        <Nav navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Customize isModalOpen={this.state.isModalOpen} toggle={this.toggleModal}/>
            </div>
        );
    }
}
  
export default Navigation;  