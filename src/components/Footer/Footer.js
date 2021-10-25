import { React, Fragment} from 'react';
import {
    Container, Row, Col,
} from 'reactstrap';
import './Footer.css';

// Logo Icon
import logoImg from '../../img/logo_circle.png';

export default function Footer() {
    return (
        <Fragment className="Footer">
            <Container>
                <Row>
                    <Col className="d-inline-flex justify-content-center mt-3">
                        <a href="https://heleneblackmer.com" target="_blank">
                            <img className="footer_icons hb_logo" src={logoImg} />
                        </a>
                        <a href="https://github.com/hblackmer" target="_blank">
                            <i className="fab fa-github media_icons" />
                        </a>
                        <a href="https://www.linkedin.com/in/hblackmer" target="_blank">
                            <i className="fab fa-linkedin media_icons" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}