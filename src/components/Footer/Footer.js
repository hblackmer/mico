import { React, Fragment} from 'react';
import {
    Container, Row, Col,
} from 'reactstrap';
import './Footer.css';

// Logo Icon
import logoImg from '../../img/logo_circle.png';

export default function Footer() {
    return (
        <Fragment>
            <Container>
                <Row>
                    <Col className="d-inline-flex justify-content-center mt-1 wrapper">
                        <div class="icon logo">
                        <div class="tooltip">Portfolio</div>
                            <a href="https://heleneblackmer.com" rel="noopener noreferrer" target="_blank">
                                <img className="footer_icons hb_logo" alt="Main website logo" src={logoImg} />
                            </a>
                        </div>
                        <div class="icon github">
                            <div class="tooltip">GitHub</div>
                            <a href="https://github.com/hblackmer" rel="noopener noreferrer" alt="GitHub logo" target="_blank">
                                <i className="fab fa-github media_icons" />
                            </a>
                        </div>
                        <div class="icon linkedin">
                            <div class="tooltip">LinkedIn</div>
                            <a href="https://www.linkedin.com/in/hblackmer" rel="noopener noreferrer" alt="LinkedIn logo" target="_blank">
                                <i className="fab fa-linkedin media_icons" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}