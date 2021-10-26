import React, { Component, Fragment } from 'react';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    Button
} from 'reactstrap';
import { NavLink as NavTo} from 'react-router-dom';
import Customize from '../Customize/Customize';
import './Navigation.css';

const links = [
    { key: 0, href: '/about', text: 'About' },
    { key: 1, href: '/contribute', text: 'Contribute' }
];

const createNavItem = ({ key, href, text }) => (
    <NavItem key={key}>
        <NavTo className="nav-link" to={"/mico"+href}>
                {text}
        </NavTo>
    </NavItem>
);

class Navigation extends Component {
    render() {
        const { isNavOpen, toggleNav, isModalOpen, toggleModal, categories} = this.props;
        return (
            <Fragment>
                <Navbar dark expand="md">
                    <NavbarBrand className="text-primary ml-2 font-weight-bold">
                        <NavTo to="/mico/">
                            MICO
                        </NavTo>
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
                <Customize isModalOpen={isModalOpen} toggleModal={toggleModal} categories={categories}/>
            </Fragment>
        );
    }
}
  
export default Navigation;  