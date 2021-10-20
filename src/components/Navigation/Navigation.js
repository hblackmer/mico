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
    render() {
        return (
            <div className="App">
                <Navbar dark expand="md">
                    <NavbarBrand className="text-primary ml-2" href="/"><strong>MICO</strong></NavbarBrand>
                    <NavbarToggler onClick={this.props.toggleNav} />
                    <Collapse isOpen={this.props.isNavOpen} navbar>
                    <Button outline onClick={this.props.toggleModal} id="start-button" className="text-primary ml-auto">Start</Button>
                        <Nav navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Customize isModalOpen={this.props.isModalOpen} toggleModal={this.props.toggleModal}/>
            </div>
        );
    }
}
  
export default Navigation;  