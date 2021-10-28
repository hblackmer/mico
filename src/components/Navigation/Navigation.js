import React, { Fragment } from 'react';
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

export default function Navigation ({ isNavOpen, toggleNav, isModalOpen, toggleModal }) {
    return (
        <Fragment>
            <Navbar dark expand="md">
                <NavbarBrand className="text-primary ml-2 font-weight-bold" href="/mico/">
                    MICO
                </NavbarBrand>
                <NavbarToggler
                    onClick={toggleNav}
                />
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
            <Customize 
                isModalOpen={isModalOpen}
                toggleModal={toggleModal}
            />
        </Fragment>
    );
}