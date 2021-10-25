import React, { Component, Fragment } from 'react';
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
        <NavLink className={className}>
            <NavTo to={"/mico"+href}>
                {text}
            </NavTo>
        </NavLink>
    </NavItem>
);

class Navigation extends Component {
    render() {
        const { isNavOpen, toggleNav, isModalOpen, toggleModal } = this.props;

        return (
            <Fragment>
                <Navbar dark expand="md">
                    <NavbarBrand className="text-primary ml-2 font-weight-bold" href="/mico/">
                        MICO
                    </NavbarBrand>
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Button 
                            outline
                            onClick={toggleModal}
                            id="start-button"
                            className="text-primary ml-auto"
                        >Start</Button>
                        <Nav navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
                <Customize isModalOpen={isModalOpen} toggleModal={toggleModal}/>
            </Fragment>
        );
    }
}
  
export default Navigation;  