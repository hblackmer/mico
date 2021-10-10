import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

class Nav extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Mico</NavbarBrand>
                </div>
                </Navbar>
            </div>
        );
    }
}
  
export default Nav;  