import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';

class Navigation extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <Container className="container">
                        <NavbarBrand href="/">Mico</NavbarBrand>
                </Container>
                </Navbar>
            </div>
        );
    }
}
  
export default Navigation;  