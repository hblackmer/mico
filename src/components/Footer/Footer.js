import React, { Component } from 'react';
import './Footer.css';
import logoImg from '../../img/logo_circle.png';

class Footer extends Component {
    render() {
        return (
            <footer class="Footer">
                <div class="container">
                    <div class="row">
                        <div class="col d-inline-flex justify-content-center mt-3">
                            <a href="https://heleneblackmer.com" target="_blank"><img class="footer_icons hb_logo"
                                src={logoImg} /></a>
                            <a href="https://github.com/hblackmer" target="_blank"><i class="fab fa-github media_icons"></i></a>
                            <a href="https://www.linkedin.com/in/hblackmer" target="_blank"><i
                                class="fab fa-linkedin media_icons"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
