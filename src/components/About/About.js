import React from 'react';
import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle
} from 'reactstrap';
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
                        <Col claclas="blurb mb-5 mb-md-0">
                            <h1 className="text-white mt-1">About Me</h1>
                            <p className="lead">Hi, my name is Helene! I am a hardware and software engineer that had always wanted to but just started learning web development in August 2021. Having been a teaching assistant for various engineering classes at my university, I have always loved helping people learn and watching them succeed which is my inspiration for creating this website. Welcome to my personal project and <a href="https://www.linkedin.com/in/hblackmer/" rel="noopener noreferrer" target="_blank" className="text-dark font-weight-bold">connect with me on Linkedin!</a></p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}