import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import './Navigation.css';

const links = [
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact' },
    { href: '#login', text: 'Login' }
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="App">
                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="text-primary ml-2" href="/"><strong>MICO</strong></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
  
export default Navigation;  