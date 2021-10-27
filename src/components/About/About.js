import React from 'react';
import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle,
    Toast, ToastBody, ToastHeader
} from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import './About.css';

// Images for Cards
import flashImg from '../../img/flash.png';
import testImg from '../../img/test.png';
import selectImg from '../../img/select.png';

// Image for Profile
import avatarImg from '../../img/avatar.png';

export default function About () {
    return (
        <Container>
            <h2 className="text-white text-center" id="about">What is Mico?</h2>
            <FadeTransform
            in
            duration = {300}
            transformProps={{
                exitTransform: 'scale(0.5) translateY(50%)'
            }}>
                <Row>
                    <Col md="4" className="about-section">
                        <Card className="about-card">
                            <CardBody className="about-body">
                                <div className="about-icons">
                                    <img src={flashImg} className="about-img" alt="A cartoon drawing of a girl sitting on a stool and picking different sticky notes."/>
                                </div>
                                <CardTitle tag="h2">A study tool</CardTitle>
                                <CardSubtitle tag="h6">Interview style questions geared for web developers.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4"  className="about-section">
                        <Card className="about-card">
                            <CardBody className="about-body">
                                <div className="about-icons">
                                    <img src={testImg} className="about-img" alt="A cartoon character deciding between different notes."/>
                                </div>
                                <CardTitle tag="h2">Flash cards</CardTitle>
                                <CardSubtitle tag="h6">Customizable and randomized flash card style questions.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="4" className="about-section">
                        <Card className="about-card">
                            <CardBody className="about-body">
                                <div className="about-icons">
                                    <img src={selectImg} className="about-img" alt="A cartoon drawing of someone checking a list."/>
                                </div>
                                <CardTitle tag="h2">Test report</CardTitle>
                                <CardSubtitle tag="h6">Comprehensive report of your question/answers for review at the end of your test.</CardSubtitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="align-items-center bio">
                    <Col md={6} className="justify-content-center">
                        <img src={avatarImg} alt="Cartoon girl showing off her website design." className="avatar-img img-fluid mt-1" />
                    </Col>
                    <Col md={6} className="text-center">
                        <Row className="justify-content-center">
                            <Col className="blurb mb-5 mb-md-0 p-3 my-2 rounded">
                                <Toast className="mw-100">
                                    <ToastHeader>
                                        <h1 className="mt-1">About Me</h1>
                                    </ToastHeader>
                                    <ToastBody>
                                        <p className="lead">Hi, my name is Helene! Having been a teaching assistant for various engineering classes at my university, I have always loved helping people learn and watching them succeed which is my inspiration for creating this website. Welcome to my personal project and <a href="https://www.linkedin.com/in/hblackmer/" rel="noopener noreferrer" target="_blank" className="text-dark font-weight-bold">connect with me on Linkedin!</a></p>
                                    </ToastBody>
                                </Toast>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </FadeTransform>
        </Container>
    );
}